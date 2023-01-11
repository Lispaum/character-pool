import { PageContainer } from '../styles'

export function Guide() {
  return (
    <PageContainer>
      <h1>Guide</h1>
      <h4>The sheet does some things automatically for you, like: </h4>
      <ul>
        <li>
          Calculate the total sum of the Primary Attributes so you can know how
          you can distribute them on your character.
        </li>
        <li>
          Calculate the Secondary Attributes based on the Primary Attributes,
          reflecting every change you make.
        </li>
      </ul>
      <p>
        You can also manage your skills and magic. If you click on a Trainable
        Skill or Scroll it will be added to the Training Table, where you can
        then train it until your character has learned it, and it will be added
        to the appropriate table. After that it is also possible to make your
        character forget the skill or magic, and it will go back to the "to be
        trained table".
      </p>
      <p>
        You can now also move the skills and scrolls to start training them by
        dragging then, try it out!
      </p>
      <p>
        You can manage your character's inventory by dragging items between the
        boxes Home Chest, Bag and Equipped. Create items by entering its name on
        the New Item Box and then dragging it to the its box. Delete items by
        hovering it then holding down left mouse button on it.
      </p>
    </PageContainer>
  )
}
