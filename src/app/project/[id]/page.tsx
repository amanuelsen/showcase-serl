import data from '@/app/lib/data'
import ProjectClientComponent from '@/app/Components/ProjectClientComponent'
import Navbarcomp1 from '@/app/Components/Navbar'
export async function generateStaticParams() {
  return data.map((project) => ({
    id: project.id.toString(),
  }))
}

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const project = data.find((project) => project.id.toString() === params.id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <Navbarcomp1 />
      <ProjectClientComponent project={project} />
    </div>
  )
}

export default ProjectPage
