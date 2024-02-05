import Link from "next/link";
import {
    RiFacebookFill,
    RiInstagramFill,
    RiLinkedinFill,
    RiYoutubeFill,
} from "react-icons/ri";

interface SocialIcon {
    path: string;
    name: JSX.Element;
}

const icons: SocialIcon[] = [
    {
        path: "/",
        name: <RiYoutubeFill />,
    },
    {
        path: "/",
        name: <RiLinkedinFill />,
    },
    {
        path: "/",
        name: <RiInstagramFill />,
    },
    {
        path: "/",
        name: <RiFacebookFill />,
    },
];

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

export default function Social({
    containerStyles,
    iconStyles,
}: SocialProps): JSX.Element {
    return (
        <div className={containerStyles}>
            {icons.map((icon, index) => (
                <Link href={icon.path} key={index} className={iconStyles}>
                    {icon.name}
                </Link>
            ))}
        </div>
    );
}
