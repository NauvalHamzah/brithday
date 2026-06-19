import { Journey } from '@/components/journey/journey'
import { journey } from '@/lib/journey-data'

export default function Page() {
  return <Journey config={journey} />
}
