/**
 * Link component renders a styled anchor element.
 * @param props - LinkProps containing title, url, and styles.
 */
interface LinkProps {
    title: string;
    url: string;
    styles: string;
}

const Link: React.FC<LinkProps> = ({title, url, styles}) => {
    return (
        <a className={styles} href={url} key={url}>{title}</a>
    )
}

export default Link;