import { parse } from 'partial-json'

export const reader = async (page: string, res: any, setState: (value: any) => void) => // read a stream and update state in chunks
{
  const reader = res.body?.getReader()
  if (!reader) return {}

  let decoder = new TextDecoder()
  let data = ''
  let parsed = {}
  while (true)
  {
    const { done, value } = await reader.read()
    if (done) break
    data += decoder.decode(value, { stream: true })
    parsed = parse(data)

    setState((prev: any) =>
    {
      // Check if the page already exists in the state
      const existingPageIndex = prev.findIndex((item: any) => item.page === page)

      if (existingPageIndex !== -1)
      {
        // If page exists, update its content
        return prev.map((item: any, index: number) =>
          index === existingPageIndex
            ? {
              ...item,
              content: {
                ...item.content, // Keep existing content
                ...parsed // Merge new content into the existing content
              }
            }
            : item
        )
      } else
      {
        // If page does not exist, add it to the state
        return [
          ...prev,
          {
            page: page,
            content: parsed
          }
        ]
      }
    })

  }

  return parsed
}
