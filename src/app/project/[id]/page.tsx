import data from '@/app/lib/data'
import ProjectClientComponent from '@/app/Components/ProjectClientComponent'
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
      <ProjectClientComponent project={project} />
    </div>
  )
}

export default ProjectPage
