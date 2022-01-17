import { Htag, Button, Paragraph,Tag } from "../components";



export const App = () => {
    return (
        <>
            <Htag tag='h1'> Hello!</Htag>
            <Htag tag='h2'> Hello!</Htag>
            <Htag tag='h3'> Hello!</Htag>
            <Button appearance="primary">Кнопка</Button>
            <Button appearance="secondary" arrow="right">Кнопка</Button>
            <Paragraph size="small">fdgdfgdg</Paragraph>
            <Paragraph size="large">fdgdfgdg</Paragraph>
            <Paragraph>fdgdfgdg</Paragraph>
            <Tag color="red">fffff</Tag>
            <Tag color="primary" size="medium">fbdfgd</Tag>
        </>
    );
};