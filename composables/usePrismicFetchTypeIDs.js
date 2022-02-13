export const usePrismicFetchTypeIDs = async function ({
    relationName,
    $prismic,
  }) {
    
    if (!relationName) {
      throw new Error(`Please provide a relation name`);
    }
  
    if (!$prismic) {
      throw new Error(`Prismic is required to query relations`);
    }

    const type = (
        await $prismic.api.query([
          $prismic.predicates.at("document.type", relationName),
        ])
      ).results;

    if(type.length > 0) {
        const ids = type.map(cat => cat.id);
        return ids;
    }
      
  };
  
  export default usePrismicFetchTypeIDs;
  /**
   * get all the ids for a document type
   * const ids = await usePrismicFetchTypeIDs({relationName:"category", $prismic})
   */
