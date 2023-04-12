import { useRouter } from 'next/router';

const BlogPost = () => {
    const router = useRouter();
    const { post } = router.query;

    return (
        <div>Página de {post}</div>
    );
};

export default BlogPost;