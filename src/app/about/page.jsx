'use client'
import Navbarcomponent from '../Components/Navbar'
export default function About() {
  return (
    <div>
      <Navbarcomponent />
      <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
        <h1 className='mb-4 text-3xl font-bold'>About ShowcaseSERL</h1>

        <div className='max-w-4xl text-left'>
          <h2 className='mb-2 text-xl font-semibold'>Project Overview</h2>
          <p className='mb-4'>
            ShowcaseSERL is a curated collection of student and
            researcher-developed projects. It serves as a public portfolio for
            finished projects and inspires students to contribute their project
            ideas.
          </p>

          <h2 className='mb-2 text-xl font-semibold'>Project Description</h2>
          <p className='mb-4'>
            In academic settings, students frequently develop projects as part
            of their coursework, while researchers create demonstrators and
            utilities intended to assist their peers. Unfortunately, these
            efforts often remain unseen, limiting their potential impact and
            collaboration opportunities.
          </p>
          <p className='mb-4'>
            ShowcaseSERL aims to highlight these projects, providing a platform
            to increase their visibility. By showcasing student and researcher
            work, we intend to foster greater engagement, encourage
            contributions to existing projects, or inspire new ideas.
          </p>

          <h2 className='mb-2 text-xl font-semibold'>Purpose</h2>
          <p className='mb-4'>
            ShowcaseSERL serves two purposes: it functions as a web application
            for browsing projects and as a kiosk display on a TV, showcasing
            these projects in a public setting (e.g., using a Raspberry Pi in
            kiosk mode).
          </p>

          <h2 className='mb-2 text-xl font-semibold'>
            Functional Requirements
          </h2>
          <ul className='mb-4 list-disc pl-5'>
            <li>
              <strong>R01:</strong> The system shall read and load a list of
              projects from a plain-text specification file in JSON format.✅
            </li>
            <li>
              <strong>R02:</strong> The specification file shall include the
              following attributes: title, description, tag, screenshots, and
              URL to the project homepage.✅
            </li>
            <li>
              <strong>R03:</strong> The system shall reload the project
              specification file at a given time interval.
            </li>
            <li>
              <strong>R04:</strong> The system shall allow users to filter the
              list of projects based on the project title.✅
            </li>
            <li>
              <strong>R05:</strong> The system shall allow users to filter the
              list of projects based on tags.✅
            </li>
            <li>
              <strong>R06:</strong> The system shall allow users to filter the
              list of projects based on the project type e.g., student or
              research project.✅
            </li>
            <li>
              <strong>R07:</strong> The system shall generate and render a QR
              code that links to the home page of each specific project.
            </li>
            <li>
              <strong>R08:</strong> he system shall display a detailed page for
              each project that includes the project title, description,
              metadata (such as tags, type, etc.), and a screenshot.✅
            </li>
            <h4>Non-Functional Requirements</h4>
            <li>
              <strong>QR1:</strong> R1 Usability: The software must have an
              intuitive and user- friendly interface that is easy for anyone to
              navigate and use.
            </li>
            <li>
              <strong>QR1</strong>• QR2 Performance: The software must load and
              display content re- sponsively. If content cannot be loaded
              quickly, a loading spinner should inform users about the loading
              process✅
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
