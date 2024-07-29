import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Register = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card className="border-primary">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-primary mb-2" />
            </div>
          </div>
          <div className="flex gap-2">
            <Label htmlFor="name" className="flex items-center mr-5">Name</Label>
            <Input id="name" type="text" placeholder="Enter Name"/>
          </div>
          <div className="flex gap-2">
            <Label htmlFor="email"  className="flex items-center mr-6">Email</Label>
            <Input id="email" type="email" placeholder="@gmail.com"/>
          </div>
          <div className="flex gap-2">
            <Label htmlFor="password" className="flex items-center">Password</Label>
            <Input id="password" type="password" placeholder="******" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create account</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register