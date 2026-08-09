import { Badge, Card, CardBody, CardHeader } from '../ui'

export interface PlaceholderPageProps {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
          <Badge variant="warning">Coming soon</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-slate-600">{description}</p>
      </CardBody>
    </Card>
  )
}
