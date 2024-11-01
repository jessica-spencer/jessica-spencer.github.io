import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-xl">Data Scientist</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="bio" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center gap-6 pt-6">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="John Doe"
                width={150}
                height={150}
                className="rounded-full"
              />
              <div>
                <p className="mb-4">
                  Passionate data scientist with 5+ years of experience in machine learning, statistical analysis, and data visualization. Committed to leveraging data-driven insights to solve complex business problems.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Key achievements or technologies used in the project.</p>
                  <Button variant="secondary">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {["Python", "R", "SQL", "Machine Learning", "Deep Learning", "Data Visualization", "Statistical Analysis", "Big Data", "Tableau", "Scikit-learn", "TensorFlow", "PyTorch"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="education">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Ph.D. in Data Science</h3>
                  <p>University Name, 2018-2022</p>
                </li>
                <li>
                  <h3 className="font-semibold">M.S. in Computer Science</h3>
                  <p>University Name, 2016-2018</p>
                </li>
                <li>
                  <h3 className="font-semibold">B.S. in Mathematics</h3>
                  <p>University Name, 2012-2016</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}