import prisma from "@/libs/prisma";

const ListCommnet = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

    return (
        <div className="flex flex-col p-2 mx-3 gap-3">
            {
                comments.map(comment => (
                    <div key={comment.id} className="p-4 bg-color-dark w-80 h-24">
                        <p className="flex justify-center items-center text-color-primary">{comment.username}</p>
                        <p className="flex justify-center items-center">{comment.comment}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default ListCommnet;
