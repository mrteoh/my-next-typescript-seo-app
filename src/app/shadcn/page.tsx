//npx shadcn@latest add button input card switch checkbox label dialog dropdown-menu tabs badge separator textarea select

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AllShadcnDemo() {
  return (
    <div className="p-6 grid gap-6">
      {/* Buttons */}
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      {/* Input + Label */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>

      {/* Card */}
      <Card>
        <CardHeader>
          <CardTitle>Card Example</CardTitle>
        </CardHeader>
        <CardContent>This is a card content area.</CardContent>
      </Card>

      {/* Switch + Checkbox */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch id="dark-mode" />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">Agree to terms</Label>
        </div>
      </div>

      {/* Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <p>This is a dialog content area.</p>
        </DialogContent>
      </Dialog>

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Tabs */}
      <Tabs defaultValue="account" className="w-[300px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account Info</TabsContent>
        <TabsContent value="password">Password Settings</TabsContent>
      </Tabs>

      {/* Badge + Separator */}
      <div className="flex items-center gap-4">
        <Badge>New</Badge>
        <Separator orientation="vertical" className="h-6" />
        <span>Separator Example</span>
      </div>

      {/* Textarea */}
      <Textarea placeholder="Write something..." />

      {/* Select */}
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choose option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
