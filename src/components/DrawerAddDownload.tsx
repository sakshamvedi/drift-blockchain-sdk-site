import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
type Props = {}

function DrawerAddDownload({}: Props) {
  return (
   <div className='drawer-index'>
   <Drawer >
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader></DrawerHeader>
            <DrawerTitle>Download Drift</DrawerTitle>
            <DrawerDescription>
             Drift is available for all your devices. Get it now and streamline your WEB-3 development for all types of chains and platforms.
            </DrawerDescription>

          </div>

          <DrawerFooter>
            <Button>Install Drift</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
          </DrawerContent>
          </Drawer>
   </div>
  )
}

export default DrawerAddDownload