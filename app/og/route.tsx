import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Hamza EL GATIA | Portfolio'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col w-full py-12 px-4 items-center justify-center p-8">
          <h2 tw="text-4xl font-bold tracking-tight text-center text-black">
            {title}
          </h2>
          <p tw="mt-4 text-xl text-neutral-700 text-center">
            R&D Software Engineer at Axelor · Java · React · React Native
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
