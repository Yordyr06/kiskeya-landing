export const Header = (): JSX.Element => {
  return (
    <header className="relative flex min-w-80 justify-between p-4 lg:justify-around">
      <section className="relative flex min-w-64 content-center">
        <span className="my-auto leading-relaxed font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-300 to-orange-700">
          <h1>
            Kiskeya Landing
          </h1>
        </span>
      </section>

      <section className="min-w-32 flex justify-center">
        <figure>
          <img 
            className="relative w-24 rounded-full" 
            src="https://yt3.googleusercontent.com/ytc/AIf8zZT696k3dDu6HT2DRHBX0oFZLVNO1dr_nSnUlNEA-A=s176-c-k-c0x00ffffff-no-rj"
            alt="" />
        </figure>
      </section>
    </header>
  )
}