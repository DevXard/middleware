
export async function get()
{
    const url = await fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(data => data.name)

    return url
}