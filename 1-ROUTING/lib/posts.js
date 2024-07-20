import fs from 'fs'
import path from 'path'
import {compileMDX} from 'next-mdx-remote/rsc'
import Newsletter from '@/app/components/Newsletter'
import rehypePrettyCode from 'rehype-pretty-code'

const rootDirectory=path.join(process.cwd(),'content')
// console.log(rootDirectory);

// rehype pugins
const prettyCodeOptions = {
    theme:'one-dark-pro',
    onVisitLine(node) {
        if(node.children.length===0){
            node.children=[{type:'text',value:" "}]
        }
    },
    onVisitHightlightedLine(node) {
        node.properties.className.push('highlighted')
    },
    onVisitHightlightedWord(node) {
        node.properties.className.push('highlighted','word')
    }
}
const components={
    h1:props=>(
        <h1{...props} className='text-emerald-500'>
        {props.children}
        </h1>
    ),
    Newsletter:Newsletter 
    // pass the custom components
    // tels the react compiler to compiler this markdown
    
    // if u ever counter with newletter compoent
}
export async function getPostBySlug(slug){
    // console.log(slug,"start getpost");
    
    const realSlug=slug.replace(/\.mdx$/,"")
    
    const filePath = path.join(rootDirectory,`${realSlug}.mdx`)
    const fileContent=fs.readFileSync(filePath,{encoding:'utf8'})
    const {content,frontmatter}=await compileMDX({
        source:fileContent,
        components,
        options:{
            parseFrontmatter:true,
            mdxOptions:{
                rehypePlugins:[[rehypePrettyCode,prettyCodeOptions]]
            }
        }
    })
    // console.log(realSlug,"realslug end")
    return {content,frontmatter,slug:realSlug}
}

export async function getAllPosts(){
    // 3
    const files=fs.readdirSync(rootDirectory)
    
    // [ 'hope.mdx', 'learn-nextjs.mdx', 'learn-reactjs.mdx' ]
    
    let posts=[]
    for(const file of files){
        // 4
        const post=await getPostBySlug(file)
        // this si the first time to call this function
        posts.push(post)
    }
    // console.log(posts)
    return posts
}
// [
//   {
//     content: {
//       '$$typeof': Symbol(react.element),
//       type: [Function: MDXContent],
//       key: null,
//       ref: null,
//       props: [Object],
//       _owner: null,
//       _store: {}
//     },
//     frontmatter: { title: 'Hope', author: 'Gear 3' },
//     slug: 'hope'
//   },
//   {
//     content: {
//       '$$typeof': Symbol(react.element),
//       type: [Function: MDXContent],
//       key: null,
//       ref: null,
//       props: [Object],
//       _owner: null,
//       _store: {}
//     },
//     frontmatter: { title: 'Learn Next.js', author: 'Gear 1' },
//     slug: 'learn-nextjs'
//   },
//   {
//     content: {
//       '$$typeof': Symbol(react.element),
//       type: [Function: MDXContent],
//       key: null,
//       ref: null,
//       props: [Object],
//       _owner: null,
//       _store: {}
//     },
//     frontmatter: { title: 'Learn React.js', author: 'Gear 2' },
//     slug: 'learn-reactjs'
//   }
// ]