import { useEffect, useRef, useId, useState, CSSProperties, ReactNode } from 'react';

interface GlassSurfaceProps {
    children?: ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    borderWidth?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    displace?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: 'R' | 'G' | 'B' | 'A';
    yChannel?: 'R' | 'G' | 'B' | 'A';
    mixBlendMode?: CSSProperties['mixBlendMode'];
    className?: string;
    style?: CSSProperties;
}

const GlassSurface = ({
    children,
    width = "100%",
    height = "100%",
    borderRadius = 20,
    borderWidth = 0.07,
    brightness = 50,
    opacity = 0.93,
    blur = 11,
    displace = 0,
    backgroundOpacity = 0.1,
    saturation = 1.2,
    distortionScale = -180,
    redOffset = 0,
    greenOffset = 10,
    blueOffset = 20,
    xChannel = 'R',
    yChannel = 'G',
    mixBlendMode = 'difference' as const,
    className = '',
    style = {}
}: GlassSurfaceProps) => {
    const uniqueId = useId().replace(/:/g, '-');
    const filterId = `glass-filter-${uniqueId}`;
    const redGradId = `red-grad-${uniqueId}`;
    const blueGradId = `blue-grad-${uniqueId}`;

    const containerRef = useRef<HTMLDivElement>(null);
    const feImageRef = useRef<SVGFEImageElement>(null);
    const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
    const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const generateDisplacementMap = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        const actualWidth = rect?.width || 400;
        const actualHeight = rect?.height || 200;

        // Safety check mostly for initial render if rect is 0
        if (actualWidth === 0 || actualHeight === 0) return '';

        const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

        const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

        return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
    };

    const updateDisplacementMap = () => {
        if (feImageRef.current) {
            feImageRef.current.setAttribute('href', generateDisplacementMap());
        }
    };

    useEffect(() => {
        if (!isClient) return;

        updateDisplacementMap();

        if (redChannelRef.current) {
            redChannelRef.current.setAttribute('scale', (distortionScale + redOffset).toString());
            redChannelRef.current.setAttribute('xChannelSelector', xChannel);
            redChannelRef.current.setAttribute('yChannelSelector', yChannel);
        }
        if (greenChannelRef.current) {
            greenChannelRef.current.setAttribute('scale', (distortionScale + greenOffset).toString());
            greenChannelRef.current.setAttribute('xChannelSelector', xChannel);
            greenChannelRef.current.setAttribute('yChannelSelector', yChannel);
        }
        if (blueChannelRef.current) {
            blueChannelRef.current.setAttribute('scale', (distortionScale + blueOffset).toString());
            blueChannelRef.current.setAttribute('xChannelSelector', xChannel);
            blueChannelRef.current.setAttribute('yChannelSelector', yChannel);
        }
        if (gaussianBlurRef.current) {
            gaussianBlurRef.current.setAttribute('stdDeviation', displace.toString());
        }
    }, [
        isClient, width, height, borderRadius, borderWidth, brightness, opacity,
        blur, displace, distortionScale, redOffset, greenOffset, blueOffset,
        xChannel, yChannel, mixBlendMode
    ]);

    useEffect(() => {
        if (!containerRef.current || !isClient) return;
        const resizeObserver = new ResizeObserver(() => {
            // Small timeout to ensure getBoundingClientRect is updated
            setTimeout(updateDisplacementMap, 0);
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [isClient]);

    const containerStyle: CSSProperties = {
        ...style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: `${borderRadius}px`,
        position: 'relative',
        overflow: 'hidden',
        // Apply the filter only if client-side to avoid hydration mismatch
        backdropFilter: isClient ? `url(#${filterId}) saturate(${saturation})` : 'none',
        WebkitBackdropFilter: isClient ? `url(#${filterId}) saturate(${saturation})` : 'none',
        // Fallback background color + frost amount
        backgroundColor: `hsl(0 0% 100% / ${backgroundOpacity})`
    };

    return (
        <div
            ref={containerRef}
            className={`glass-surface ${className}`}
            style={containerStyle}
        >
            {isClient && (
                <svg
                    style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, pointerEvents: 'none' }}
                >
                    <defs>
                        <filter id={filterId} colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
                            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
                            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
                            <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />
                            <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" id="greenchannel" result="dispGreen" />
                            <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green" />
                            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
                            <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />
                            <feBlend in="red" in2="green" mode="screen" result="rg" />
                            <feBlend in="rg" in2="blue" mode="screen" result="output" />
                            <feGaussianBlur ref={gaussianBlurRef} in="output" />
                        </filter>
                    </defs>
                </svg>
            )}
            {children}
        </div>
    );
};

export default GlassSurface;
