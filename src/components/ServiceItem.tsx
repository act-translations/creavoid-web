import React from "react";
import {
    Bot,
    Settings2,
    Grid,
    Code2,
    Palette,
    Search,
    Megaphone,
    Users,
    Link as LinkIcon,
    BarChart3,
    Brain,
    Cpu,
    Briefcase,
    Lightbulb,
    FileText,
    Mail,
    MessagesSquare,
    Cloud,
    TrendingUp,
    Activity,
} from "lucide-react";

const icons = {
    Bot,
    Settings2,
    Grid,
    Code2,
    Palette,
    Search,
    Megaphone,
    Users,
    LinkIcon,
    BarChart3,
    Brain,
    Cpu,
    Briefcase,
    Lightbulb,
    FileText,
    Mail,
    MessagesSquare,
    Cloud,
    TrendingUp,
    Activity,
};

type IconName = keyof typeof icons;

interface ServiceItemProps {
    icon?: React.ReactElement;
    iconName?: IconName;
    title: string;
    description: string;
    iconColor?: string;
}

export function ServiceItem({ icon, iconName, title, description, iconColor = "text-primary" }: ServiceItemProps) {
    const resolvedIcon = icon ?? (iconName ? React.createElement(icons[iconName]) : null);

    return (
        <div className="flex gap-4 items-start group">
            <div className="shrink-0 p-0">
                {resolvedIcon &&
                    React.cloneElement(resolvedIcon as React.ReactElement<any>, {
                        className: `w-8 h-8 ${iconColor}`,
                    })}
            </div>
            <div>
                <h3 className="text-xl font-bold font-serif mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
            </div>
        </div>
    );
}
