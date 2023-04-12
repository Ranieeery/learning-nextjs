import { useRouter } from 'next/router';

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>Página de {slug}</div>
    );
};

export default BlogPost;