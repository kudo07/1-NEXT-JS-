import { getAllPosts, getPostBySlug } from "@/lib/posts"
export async function generateStaticParams(){
    const posts=await getAllPosts()
    return posts.map(post=>({slug:[post.slug]}))


}
// 7
// 
// this function calls automatically as it define in the next js
const page = async ({params}) => {
    // console.log(params);
    

    const {slug}=params
    // this params comes after the page.jsx of the posts where the params defined from taking the markown filename name
//    console.log(slug)

    const {content,frontmatter}=await getPostBySlug(slug[0])
    //                                                  8
    // this is the second time call this function to frame the ui of that particular
    // params which comes from the files in the markdown originallya dnwe get that param for further call to
    // to get the content again
    // console.log(content,frontmatter)
  return (
    <section className="py-24 ">
{/* 9 */}
        <div className='container '>
            {/* post frontmetter */}
            <header className='rounded bg-gray-400 p-8 w-96'>
                <h1 className='text-3xl text-gray-800'>
                    Super {frontmatter.title}
                </h1>
                    <p className='text-sm font-mono uppercase bold text-gray-50'>Next Js</p>
            </header>
            {/* main content */}
            <main className="prose mt-12">{content}</main>
        </div>
    
    </section>
  )
}

export default page
