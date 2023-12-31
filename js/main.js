
document.addEventListener('DOMContentLoaded', () => {
  //   HEADER

  const heder = document.querySelector('.heder')
  const selectBlocks = document.querySelectorAll('.heder__select-block')

  for (let selectBlock of selectBlocks) {
    const select = selectBlock.querySelector('.heder__select')
    const selectList = selectBlock.querySelector('.heder__select-list');
    select.addEventListener('click', (e) => {
      selectBlock.classList.toggle('heder__select-active')
    })

    for (let link of selectList.children) {
      link.addEventListener('click', (e) => {
        const selectVal = link.querySelector('.heder__select-value')
        const selectFlag = link.querySelector('.heder__select-flag')
        const selectedVal = select.querySelector('.heder__selected-value')
        const selectedFlag = select.querySelector('.heder__selected-flag')
        selectedFlag.src = selectFlag.src
        selectedFlag.alt = selectFlag.alt
        selectedVal.textContent = selectVal.textContent
        selectBlock.classList.remove('heder__select-active')
      })
    }
  }

  const notifBlock = heder.querySelector('.heder__notification-block')
  const notif = heder.querySelector('.heder__notification-btn')
  notif.addEventListener('click', (e) => {
    notifBlock.classList.toggle('heder__notification-active')
  })

  const profileBlock = heder.querySelector('.heder__profile-block')
  const profileLinks1 = heder.querySelectorAll('.heder__profile-content')
  const profileLinks2 = heder.querySelectorAll('.heder__profile-arrow')

  for (let link of profileLinks1) {
    link.addEventListener('click', (e) => {
      profileBlock.classList.toggle('heder__profile-active')
    })
  }

  for (let link of profileLinks2) {
    link.addEventListener('click', (e) => {
      profileBlock.classList.toggle('heder__profile-active')
    })
  }

  const hederTabs = heder.querySelectorAll('.heder__tab')
  const hederTabeds = heder.querySelectorAll('.heder__drop-list')

  for (let tab of hederTabs) {
    tab.addEventListener('click', (e) => {
      if (!tab.classList.contains('heder__tab-active')) {
        for (let tab of hederTabs) {
          tab.classList.remove('heder__tab-active')
        }
        tab.classList.add('heder__tab-active')
        for (let tabed of hederTabeds) {
          tab.dataset.tab === tabed.dataset.tabed ? tabed.style.display = 'flex' : tabed.style.display = 'none';
        }
      }
    })
  }



  // POPUP


  const popup = document.querySelector('.popup')
  const signIn = document.querySelector('.login')
  const menu = document.querySelector('.menu')

  function showPopup(elem, name) {
    elem.classList.add(name)
    document.body.style.overflowY = 'hidden'
  }

  function hidePopup(elem, name) {
    elem.classList.remove(name)
    document.body.style.overflowY = 'auto'
  }

  // ***** ВЫЗОВ ПОПАПА 1
  const btns = heder.querySelectorAll('.heder__profile-pay')
  for (let btn of btns) {
    btn.addEventListener('click', (e) => showPopup(popup, 'popup-active'))
  }
  // ***** ВЫЗОВ ПОПАПА 1


  // ***** ВЫЗОВ ПОПАПА 2
  const btn2 = heder.querySelector('.heder__login')
  btn2.addEventListener('click', (e) => showPopup(signIn, 'login-active'))
  // ***** ВЫЗОВ ПОПАПА 2

  // ***** ВЫЗОВ МЕНЮ
  const menuBtn = heder.querySelector('.heder__mobile-menu')
  menuBtn.addEventListener('click', (e) => showPopup(menu, 'menu-active'))
  // ***** ВЫЗОВ МЕНЮ

  const close = document.querySelector('.popup__close')
  close.addEventListener('click', (e) => hidePopup(popup, 'popup-active'))

  const close2 = document.querySelector('.login__close')
  close2.addEventListener('click', (e) => hidePopup(signIn, 'login-active'))

  const close3 = menu.querySelector('.heder__mobile-menu');
  close3.addEventListener('click', (e) => hidePopup(menu, 'menu-active'))

  document.addEventListener('keyup', (event) => {
    if (event.key == 'Escape') {
      hidePopup(popup, 'popup-active')
      hidePopup(signIn, 'login-active')
    }
  })

  const loginBtn = document.querySelector('.login__button');
  loginBtn.addEventListener('click', (e) => {
    heder.classList.remove('heder__nonprofile')
    hidePopup(signIn, 'login-active')
  })



  const selectBlock = document.querySelector('.popup__select-block')
  const select = selectBlock.querySelector('.popup__select')
  const selectList = selectBlock.querySelector('.popup__select-list');
  select.addEventListener('click', (e) => {
    selectBlock.classList.toggle('popup__select-active')
  })

  for (let link of selectList.children) {
    link.addEventListener('click', (e) => {
      const selectVal = link.querySelector('.popup__select-value')
      const selectFlag = link.querySelector('.popup__select-flag')
      const selectedVal = select.querySelector('.popup__selected-value')
      const selectedFlag = select.querySelector('.popup__selected-flag')
      selectedFlag.src = selectFlag.src
      selectedFlag.alt = selectFlag.alt
      selectedVal.textContent = selectVal.textContent
      selectBlock.classList.remove('popup__select-active')
    })
  }

  const paymentList = document.querySelector('.popup__payment-list')


  for (let item of paymentList.children) {
    item.addEventListener('click', () => {
      if (!item.classList.contains('popup__payment-active')) {
        for (let item of paymentList.children) {
          item.classList.remove('popup__payment-active')
        }
        item.classList.add('popup__payment-active')
        const atr = item.dataset.paymentLink.toLowerCase()
        const elems = document.querySelector('.popup__right')
        for (let elem of elems.children) {
          elem.classList.remove('popup__right-active')
          elem.dataset.payment.toLowerCase() == atr ? elem.classList.add('popup__right-active') : null
        }
      }
    })
  }

  const promocodes = document.querySelectorAll('.popup__promocode-form')
  for (let promocode of promocodes) {
    const input = promocode.querySelector('.popup__promocode-input')
    const btn = promocode.querySelector('.popup__promocode-button')
    input.addEventListener('input', (e) => {
      e.target.value !== '' ? btn.disabled = false : btn.disabled = true
    })
  }

  const rightBlock = document.querySelector('.popup__right')
  for (let right of rightBlock.children) {
    const tabs = right.querySelectorAll('.popup__tab')
    const input = right.querySelector('.popup__refil-input')
    const price = right.querySelector('.popup__price')
    const switchers = right.querySelectorAll('.popup__switch')
    const switchContainers = right.querySelectorAll('.popup__switch-container')

    if (tabs.length) {
      for (let tab of tabs) {
        tab.addEventListener('click', () => {
          for (let tab of tabs) {
            tab.classList.remove('popup__tab-active')
          }
          tab.classList.add('popup__tab-active')
          const val = tab.querySelector('.popup__tab-value')
          price ? price.textContent = val.textContent : null
        })
      }
    }

    if (input) {
      input.addEventListener('change', (e) => {
        price ? price.textContent = e.target.value : null
      })
    }

    if (switchers.length) {
      for (let switcher of switchers) {
        switcher.addEventListener('click', (e) => {
          for (let container of switchContainers) {
            if (switcher.dataset.switch == container.dataset.switched) {
              for (let switcher of switchers) {
                switcher.classList.remove('popup__switch-active')
              }
              switcher.classList.add('popup__switch-active')
              container.classList.add('popup__switched-active')
            } else {
              container.classList.remove('popup__switched-active')
            }
          }

        })
      }
    }
  }
})
