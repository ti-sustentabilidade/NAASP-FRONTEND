import FamilyResults from "./filter-results/families-table"
import { FamilyFilter } from "./filter-results/families-filter"

export const ViewFamiliesIndex = () => {
  return (
    <>
      <title>Visualizar Famílias</title>
      <FamilyFilter />
      <FamilyResults />
    </>
  )
}
export default ViewFamiliesIndex
