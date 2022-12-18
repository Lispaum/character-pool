import { PageContainer } from '../styles'

export function Home() {
  return (
    <PageContainer>
      <h1>Home</h1>
      <p>
        This is an app to create and manage RPG sheets, based on the Witcher RPG
        system rules.{' '}
      </p>
      <p>
        In Sheets you can see sheets already made, and you can create new ones
        in New Sheet. The Guide has more details on how everything works.
      </p>
    </PageContainer>
  )
}
