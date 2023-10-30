"use client"

// import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useEffect } from 'react'


export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)
 

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return null
    
 
  
}

  //  <div className='p-4'>
  //   {/* <Button size="default" variant="default">Click Me</Button> */}
  //   {/* <UserButton afterSignOutUrl='/'/> */}
  //   {/* <Modal title="Test" description="Test Description" isOpen onClose={() => {}}>
  //     Children
  //   </Modal> */}
  //   Root Page NULL

  //  </div>