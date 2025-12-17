import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Categories/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Categories/"!</div>
}
