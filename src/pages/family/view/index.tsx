import FamilyResults from "./filter-results/families-table"
import { FamilyFilter } from "./filter-results/families-filter"

export const ViewFamiliesIndex = () => {
  return (
    <>
      <FamilyFilter />
      <FamilyResults />
    </>
  )
}
export default ViewFamiliesIndex
