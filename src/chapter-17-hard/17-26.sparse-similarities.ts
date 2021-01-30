type Document = {
  id: number
  words: number[]
}

export const computeSimilarities = (
  documents: Map<number, Document>
): Map<string, number> => {
  const similarities = new Map<string, number>()

  const wordToDocs = new Map<number, Document[]>()

  for (const doc of documents.values()) {
    for (const word of doc.words) {
      if (!wordToDocs.has(word)) wordToDocs.set(word, [])

      wordToDocs.get(word)!.push(doc)
    }
  }

  for (const [_, docs] of wordToDocs.entries()) {
    docs.sort((a, b) => a.id - b.id)
    for (let i = 0; i < docs.length; ++i) {
      for (let j = i + 1; j < docs.length; ++j) {
        const key = docs[i].id + '-' + docs[j].id

        if (similarities.has(key))
          similarities.set(key, similarities.get(key)! + 1)
        else similarities.set(key, 1)
      }
    }
  }

  for (const [key, intersection] of similarities) {
    const [id1, id2] = key.split('-')

    const union =
      documents.get(+id1)!.words.length +
      documents.get(+id2)!.words.length -
      intersection

    similarities.set(key, intersection / union)
  }

  return similarities
}
