import { GetStaticProps } from "next";
import { renderWithLayout } from "../layout/Layout";
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from "../interfaces/menu.interface";


function Search(): JSX.Element {

    return (
        <>
            Search
        </>
    );
}

export default renderWithLayout(Search);

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