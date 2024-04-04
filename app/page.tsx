/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0NHpQ14q9nS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>Acme Inc</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Projects
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            About
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container flex flex-col items-center px-4 md:px-6'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                Hi, I'm Jane
              </h1>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                I turn coffee into code. Enthusiastic about creating beautiful
                web experiences.
              </p>
            </div>
            <div className='mx-auto'>
              <img
                alt='Photo'
                className='rounded-full border aspect-[1/1] overflow-hidden object-cover object-center'
                height='150'
                src='/placeholder.svg'
                width='150'
              />
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
          <div className='container grid gap-6 px-4 text-center md:px-6'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                My Skills
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                I'm proficient in the following technologies.
              </p>
            </div>
            <div className='mx-auto grid max-w-sm items-center gap-2 border border-gray-200 border-gray-200 rounded-lg bg-white shadow-sm divide-y divide-gray-200 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:shadow-sm dark:divide-gray-800'>
              <div className='grid items-center gap-2 px-4 py-2'>
                <span className='font-medium'>HTML</span>
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                  90%
                </span>
              </div>
              <div className='grid items-center gap-2 px-4 py-2'>
                <span className='font-medium'>CSS</span>
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                  80%
                </span>
              </div>
              <div className='grid items-center gap-2 px-4 py-2'>
                <span className='font-medium'>JavaScript</span>
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                  70%
                </span>
              </div>
              <div className='grid items-center gap-2 px-4 py-2'>
                <span className='font-medium'>React</span>
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                  85%
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
          <div className='container grid items-center gap-4 px-4 md:px-6'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                My Projects
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                A collection of my work that showcases my skills and experience.
              </p>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6'>
              <Card className='w-full'>
                <CardHeader>
                  <div className='grid items-center gap-2 md:grid-cols-2'>
                    <h3 className='text-base font-semibold'>
                      Next.js Boilerplate
                    </h3>
                    <div className='flex items-center justify-end space-x-2 text-sm'>
                      <span className='text-gray-500'>Viewed 1,200 times</span>
                      <span className='text-gray-500'>Starred 100 times</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='grid items-center gap-4 md:gap-6'>
                  <p className='text-sm line-clamp-3'>
                    A starting point for your Next.js app with batteries
                    included. TypeScript, ESLint, Prettier, Jest, and more.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Button className='rounded-full' variant='outline'>
                      Next.js
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      TypeScript
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      ESLint
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      Prettier
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      Jest
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className='w-full'>
                <CardHeader>
                  <div className='grid items-center gap-2 md:grid-cols-2'>
                    <h3 className='text-base font-semibold'>
                      Next.js Boilerplate
                    </h3>
                    <div className='flex items-center justify-end space-x-2 text-sm'>
                      <span className='text-gray-500'>Viewed 1,200 times</span>
                      <span className='text-gray-500'>Starred 100 times</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='grid items-center gap-4 md:gap-6'>
                  <p className='text-sm line-clamp-3'>
                    A starting point for your Next.js app with batteries
                    included. TypeScript, ESLint, Prettier, Jest, and more.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Button className='rounded-full' variant='outline'>
                      Next.js
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      TypeScript
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      ESLint
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      Prettier
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      Jest
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className='w-full'>
                <CardHeader>
                  <div className='grid items-center gap-2 md:grid-cols-2'>
                    <h3 className='text-base font-semibold'>
                      Next.js Boilerplate
                    </h3>
                    <div className='flex items-center justify-end space-x-2 text-sm'>
                      <span className='text-gray-500'>Viewed 1,200 times</span>
                      <span className='text-gray-500'>Starred 100 times</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='grid items-center gap-4 md:gap-6'>
                  <p className='text-sm line-clamp-3'>
                    A starting point for your Next.js app with batteries
                    included. TypeScript, ESLint, Prettier, Jest, and more.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Button className='rounded-full' variant='outline'>
                      Next.js
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      TypeScript
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      ESLint
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      Prettier
                    </Button>
                    <Button className='rounded-full' variant='outline'>
                      Jest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
          <div className='container grid items-center gap-4 px-4 md:px-6'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Contact Me
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Want to work together? Drop me a message.
              </p>
            </div>
            <div className='mx-auto w-full max-w-[400px] space-y-2'>
              <form className='grid gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Enter your name' required />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    placeholder='Enter your email'
                    required
                    type='email'
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    className='min-h-[100px]'
                    id='message'
                    placeholder='Enter your message'
                    required
                  />
                </div>
                <Button type='submit'>Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}
