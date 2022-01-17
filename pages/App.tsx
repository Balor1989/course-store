import { useState } from "react";
import { Htag, Button, Paragraph,Tag } from "../components";



export const App = () => {
    const [title, setTitle] = useState<string>('Hello world!');
    const [counter, setCounter] = useState<number>(0);
    return (
        <>
            <Htag tag='h1'> {title}</Htag>
            <Htag tag='h2'> Hello!</Htag>
            <Htag tag='h3'> Hello!</Htag>
            <Button appearance="primary" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
            <Button appearance="secondary" arrow="right" onClick={() => setCounter(x => x - 1)}>Кнопка</Button>
            <Paragraph size="small">{counter}</Paragraph>
            <Paragraph size="large">fdgdfgdg</Paragraph>
            <Paragraph>fdgdfgdg</Paragraph>
            <Tag color="red">fffff</Tag>
            <Tag color="primary" size="medium">fbdfgd</Tag>
        </>
    );
};