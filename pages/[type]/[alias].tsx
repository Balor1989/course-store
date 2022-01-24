import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { renderWithLayout } from "../../layout/Layout";
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from "../../interfaces/menu.interface";
import { TopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "../../interfaces/product.interface";
  
const firstCategory = 0;


function Course({ products }: CourseProps): JSX.Element {
 
    return (
        <>
            {products && products.length}
        </>
    );
}

export default renderWithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {     firstCategory   });

    return {
        paths: menu.flatMap(m => m.pages.map(p=> '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });
    const { data: page }: AxiosResponse<TopPageModel> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: products }: AxiosResponse<ProductModel[]> = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',{
        category: page.category,
        limit: 7
    });
    
    return {
        props: {
            firstCategory,
            menu,
            page,
            products
        }
    };
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
    page: TopPageModel;
    products: ProductModel[];
}