import { useEffect, useState } from 'react'
import Switch from 'react-switch'
const LanguageToggle = (props) => {
  const [load, setLoad] = useState(false)
  const [checked, setChecked] = useState(false)
  const handleChange = (nextChecked) => {
    if (checked) {
      Weglot.switchTo('en')
    } else {
      Weglot.switchTo('ar')
    }
    setChecked(nextChecked)
  }
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.weglot.com/weglot.min.js'
    script.async = true

    document.body.appendChild(script)

    if (!Weglot.initialized) {
      Weglot.initialize({
        api_key: 'wg_3ab6e0d6a843049da2729dc2a39432691',
        // Manually design switcher
        switchers: [
          {
            style: {
              full_name: true,
              with_name: true,
              is_dropdown: false,
              with_flags: true,
              flag_type: 'circle',
              invert_flags: false,
            },
            // Move switcher somewhere in the page
            location: {
              target: '.lang-switch',
              sibling: null,
            },
          },
        ],
      })

      setLoad(true)
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [Weglot, Weglot.initialized])

  useEffect(() => {
    if (Weglot.initialized) {
      Weglot.getCurrentLang() === 'en' ? setChecked(false) : setChecked(true)
    }
  }, [Weglot, Weglot.initialized])

  // useEffect(() => {
  //   console.log(
  //     Weglot.initialize({
  //       api_key: 'wg_3ab6e0d6a843049da2729dc2a39432691',
  //     }),
  //     'this'
  //   )
  // }, [])

  return (
    <>
      <div className="flex justify-between ignore-weglot">
        {/* <Switch
          id="small-radius-switch"
          onChange={handleChange}
          checked={checked}
          className="react-switch z-50"
          uncheckedIcon={
            <div className="flex justify-center items-center bg-transparent">
              <img className="rounded-full w-5" src={ArabFlag} alt="" />
            </div>
          }
          checkedIcon={
            <div className="flex justify-center items-center bg-transparent">
              <img className="rounded-full w-5" src={EnglandFlag} alt="" />
            </div>
          }
          uncheckedHandleIcon={
            <div className="flex justify-center items-center bg-transparent">
              <img className="rounded-full w-5" src={EnglandFlag} alt="" />
            </div>
          }
          checkedHandleIcon={
            <div className="flex justify-center items-center bg-transparent">
              <img className="rounded-full w-5" src={ArabFlag} alt="" />
            </div>
          }
        /> */}
        <Switch
          handleDiameter={28}
          height={40}
          width={70}
          borderRadius={6}
          offColor="#fff"
          onColor="#fff"
          onHandleColor="#0e7469"
          offHandleColor="#0e7469"
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
            className='ignore-weglot'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: '#0e7469',
                paddingRight: 2,
              }}
            >
              AR
            </div>
          }
          checkedIcon={
            <div
            className='ignore-weglot'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: '#0e7469',
                paddingRight: 2,
              }}
            >
              EN
            </div>
          }
          uncheckedHandleIcon={
            <div
            className='ignore-weglot'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: '#fff',
                paddingRight: 2,
              }}
            >
              EN
            </div>
          }
          checkedHandleIcon={
            <div
            className='ignore-weglot'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: '#fff',
                paddingRight: 2,
              }}
            >
              AR
            </div>
          }
          id="small-radius-switch"
          onChange={handleChange}
          checked={checked}
          className="react-switch z-50 shadow-xl ignore-weglot"
        />
      </div>
    </>
  )
}

export default LanguageToggle
