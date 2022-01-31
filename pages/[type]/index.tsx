import { GetStaticPaths, GetStaticProps } from "next";
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from "../../interfaces/menu.interface";
import { renderWithLayout } from "../../layout/Layout";
import { firstLevelMenu } from "../../helpers/helpers";



function Type(): JSX.Element {

    return (
        <>
            type
        </>
    );
}

export default renderWithLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(menu => '/' + menu.route),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu }: AxiosResponse<MenuItem[]> = await axios
        .post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });
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