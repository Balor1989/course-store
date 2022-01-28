import { useState } from "react";
import { GetStaticProps } from "next";
import { Htag, Button, Paragraph,Tag, Rating } from "../components";
import { renderWithLayout } from "../layout/Layout";
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from "../interfaces/menu.interface";


function Home({ menu}: HomeProps): JSX.Element {
    const [title] = useState<string>('Hello world!');
    const [counter, setCounter] = useState<number>(0);
    const[rating,setRating]= useState<number>(2);
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
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </>
    );
}

export default renderWithLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });
    return {
        props: {
            firstCategory,
            menu
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}