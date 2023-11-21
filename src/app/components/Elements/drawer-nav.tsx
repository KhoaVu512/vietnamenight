import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="text-[22px] text-white flex flex-col mt-12 mx-3">
        <div>Menu</div>
        <hr className="tex-white h-[1px]  flex " />
        <div className=" hover:text-[#888] font-bold">
          <div className="py-2 border-b-[1px] border-b-[rgba(255,255,255,.05)]">
            <div className="my-1">Trang chu</div>
          </div>
          <div className="py-2 border-b-[1px] border-b-[rgba(255,255,255,.05)]">
            <div className="my-1">Gioi thieu</div>
          </div>{' '}
          <div className="py-2 border-b-[1px] border-b-[rgba(255,255,255,.05)]">
            <div className="my-1">Su kien</div>
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuRoundedIcon sx={{
             color: 'white'
            }}/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {/* <div className='bg-[linear-gradient(to right,#c31432,#240b36)]'>
            </div> */}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
