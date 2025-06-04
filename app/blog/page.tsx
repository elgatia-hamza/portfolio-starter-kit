import { BlogPosts } from 'app/components/Posts'

export const metadata = {
  title: 'Blog | Hamza EL GATIA',
  description: "Insights, tutorials, and updates from Hamza EL GATIA's software engineering journey.",
}

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 tracking-tighter">
        My Blog
      </h1>
      <BlogPosts />
    </section>
  )
}
