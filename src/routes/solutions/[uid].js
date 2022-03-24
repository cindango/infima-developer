import createClient from '$lib/prismic'

export async function get({ fetch, params }) {
  const client = createClient({ fetch })
  const { uid } = params
  const document = await client.getByUID('solution', uid,
    { fetchLinks: 'product.name' }
  )

  if (document)
    return {
      body: {
        document,
      },
    }

  return {
    status: 404,
  }
}
