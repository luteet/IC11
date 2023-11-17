
const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	aside = document.querySelector('aside'),
	menu = document.querySelectorAll('.aside, .aside__burger, body'),
	header = document.querySelector('.header');


// =-=-=-=-=-=-=-=-=-=- <image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-

const imageAspectRatio = document.querySelectorAll('.image-aspect-ratio, figure');
imageAspectRatio.forEach(imageAspectRatio => {
	const img = imageAspectRatio.querySelector('img'), style = getComputedStyle(imageAspectRatio);
	if(img) {
		if(img.getAttribute('width') && img.getAttribute('height') && style.position == "relative")
		imageAspectRatio.style.setProperty('--padding-aspect-ratio', Number(img.getAttribute('height')) / Number(img.getAttribute('width')) * 100 + '%');
	}
	
})

// =-=-=-=-=-=-=-=-=-=- </image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-



// =-=-=-=-=-=-=-=-=-=-=-=- <click-events> -=-=-=-=-=-=-=-=-=-=-=-=

let dropDownArray = [];

/* document.querySelectorAll('.drop-down-2').forEach((dropDown, index) => {
	const block = dropDown.querySelector('.drop-down-2__block');
	block.setAttribute('id', "drop-down-block-" + (index+1));
	dropDown.setAttribute('data-drop-down-target', "drop-down-block-" + (index+1));
	dropDownArray.push(block);
	body.append(block);
}) */

let asideTimeout;
body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}


	// =-=-=-=-=-=-=-=-=-=-=-=- <menu-in-header> -=-=-=-=-=-=-=-=-=-=-=-=
	
	if ($('.aside__burger')) {
	
		menu.forEach(element => {
			element.classList.toggle('is-mobile-menu-active')
		})
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </menu-in-header> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <drop-down> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const dropDownTarget = $(".drop-down__target")
	if(dropDownTarget) {
	
		const parent = dropDownTarget.closest('.drop-down');
		if(parent.classList.contains('is-active')) {
			document.querySelectorAll('.drop-down.is-active').forEach(dropDown => {
				dropDown.classList.remove('is-active');
			})
		} else {
			document.querySelectorAll('.drop-down.is-active').forEach(dropDown => {
				dropDown.classList.remove('is-active');
			})
			
			parent.classList.add('is-active');
		}
		
	
	} else if(!$('.drop-down') || $('.drop-down__list a')) {
		document.querySelectorAll('.drop-down.is-active').forEach(dropDown => {
			dropDown.classList.remove('is-active');
		})
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </drop-down> -=-=-=-=-=-=-=-=-=-=-=-=

	

	// =-=-=-=-=-=-=-=-=-=-=-=- <aside-slide-toggle> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const asideSlideToggle = $(".aside__slide-toggle")
	if(asideSlideToggle) {

		clearTimeout(asideTimeout);
	
		aside.querySelector('.aside__body--wrapper').classList.add('fade-out-2');
		setTimeout(() => {
			aside.querySelector('.aside__body--wrapper').classList.remove('fade-in-2');
		},0)

		setTimeout(() => {

			aside.classList.toggle('is-min');
			if(aside.classList.contains('is-min')) {
				localStorage.setItem('ic11-aside-min', true);
			} else {
				localStorage.setItem('ic11-aside-min', false);
			}
			
			if(aside.classList.contains('is-min')) {
				aside.classList.add('is-min-2');
				setTimeout(() => {
					aside.querySelector('.aside__body--wrapper').classList.add('fade-in-2');
					setTimeout(() => {
						aside.querySelector('.aside__body--wrapper').classList.remove('fade-out-2');
					},0)
				},500)
			} else {
				asideTimeout = setTimeout(() => {
					aside.classList.toggle('is-min-2');
					aside.querySelector('.aside__body--wrapper').classList.add('fade-in-2');
					setTimeout(() => {
						aside.querySelector('.aside__body--wrapper').classList.remove('fade-out-2');
					},0)
				},500)
			}

		},300)
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </aside-slide-toggle> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <aside-nav> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const asideNavButton = $(".aside__nav button")
	if(asideNavButton) {
	
		asideNavButton.classList.toggle('is-active')
		if(asideNavButton.classList.contains('is-active')) {
			const div = asideNavButton.nextElementSibling.querySelector('div');

		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </aside-nav> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <section-table> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const sectionTableSearchSubmit = $(".section-table__search--submit")
	if(sectionTableSearchSubmit) {
	
		if(window.innerWidth < 992 && !sectionTableSearchSubmit.parentElement.classList.contains('is-active') && !sectionTableSearchSubmit.parentElement.classList.contains('is-alternative')) {
			event.preventDefault();
			sectionTableSearchSubmit.parentElement.classList.add('is-active')
		}
	
	} else {
		document.querySelectorAll('.section-table__search.is-active').forEach(search => {
			search.classList.remove('is-active')
		})
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </section-table> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <drop-down-2> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const dataDropDownTarget = $(".drop-down-2")
	if(dataDropDownTarget && getDeviceType() != "desktop") {

		if(dataDropDownTarget.classList.contains('is-active-drop-down')) {
			/* document.querySelectorAll('.drop-down-2.is-active-drop-down').forEach(dropDownActive => {
				dropDownActive.classList.remove('is-active-drop-down')
				if(dropDownActive.closest('.section-table__row-block')) dropDownActive.closest('.section-table__row-block').classList.remove('on-active');
			}) */
			document.querySelectorAll('.drop-down-2__block.is-active').forEach(block => {
				setTimeout(() => {
					block.classList.remove('is-active');
				},0)
				block.classList.add('is-hidden')
			})
	
			document.querySelectorAll('.drop-down-2.is-active-drop-down').forEach(dropDownActive => {
				dropDownActive.classList.remove('is-active-drop-down')
				if(dropDownActive.closest('.section-table__row-block')) dropDownActive.closest('.section-table__row-block').classList.remove('on-active');
			})
		} else {
			document.querySelectorAll('.drop-down-2.is-active-drop-down').forEach(dropDownActive => {
				dropDownActive.classList.remove('is-active-drop-down')
				if(dropDownActive.closest('.section-table__row-block')) dropDownActive.closest('.section-table__row-block').classList.remove('on-active');
			})

			dataDropDownTarget.classList.add('is-active-drop-down')
			if(dataDropDownTarget.closest('.section-table__row-block')) dataDropDownTarget.closest('.section-table__row-block').classList.add('on-active');

			document.querySelectorAll('.drop-down-2__block.is-active').forEach(block => {
				setTimeout(() => {
					block.classList.add('is-hidden')
				},0)

				block.classList.remove('is-active')
				
			})

			if(dataDropDownTarget.querySelector('.drop-down-2__block')) {
				const block = dataDropDownTarget.querySelector('.drop-down-2__block');
				block.setAttribute('id', "drop-down-block-" + dropDownArray.length);
				dataDropDownTarget.setAttribute('data-drop-down-target', "drop-down-block-" + dropDownArray.length);
				dropDownArray.push(block);
				body.append(block);
			}

			const block = document.querySelector(`#${dataDropDownTarget.dataset.dropDownTarget}`);
			
			
			if(event.pageY + block.offsetHeight > window.innerHeight) {
				block.style.setProperty('--y', event.pageY - block.offsetHeight + 'px');
			} else {
				block.style.setProperty('--y', event.pageY + 'px');
			}

			if(event.pageX + block.offsetWidth > windowSize) {
				if(windowSize > 992) {
					block.style.setProperty('--x', window.innerWidth - block.offsetWidth - 20 + 'px');
				} else {
					block.style.setProperty('--x', window.innerWidth - block.offsetWidth + 40 + 'px');
				}
			} else {
				block.style.setProperty('--x', Math.max(100, Math.min(window.innerWidth - 70 - 20, event.pageX)) + 'px');
			}

			setTimeout(() => {
				block.classList.remove('is-hidden')
				setTimeout(() => {
					block.classList.add('is-active')
				},0)
			},0)
		}
	
	} else if(document.querySelector('.drop-down-2__block.is-active')) {
		document.querySelectorAll('.drop-down-2__block.is-active').forEach(block => {
			setTimeout(() => {
				block.classList.remove('is-active');
			},0)
			block.classList.add('is-hidden')
		})

		document.querySelectorAll('.drop-down-2.is-active-drop-down').forEach(dropDownActive => {
			dropDownActive.classList.remove('is-active-drop-down')
			if(dropDownActive.closest('.section-table__row-block')) dropDownActive.closest('.section-table__row-block').classList.remove('on-active');
		})
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </drop-down-2> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <password-input> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const passwordInputVisibleToggle = $(".password-input__visible-toggle")
	if(passwordInputVisibleToggle) {
	
		const input = passwordInputVisibleToggle.parentElement.querySelector('.password-input');
		if(input) {
			passwordInputVisibleToggle.classList.toggle('is-active');
			if(passwordInputVisibleToggle.classList.contains('is-active')) {
				input.type = 'text';
			} else {
				input.type = 'password';
			}
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </password-input> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <notification> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const notificationTarget = $(".notification__target.is-has-notice")
	if(notificationTarget) {
	
		notificationTarget.classList.remove('is-has-notice')
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </notification> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <down-sidebar> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const downSidebarArrowTarget = $(".down-sidebar__arrow-target, .down-sidebar__comments-target, .down-sidebar__total-target")
	if(downSidebarArrowTarget) {
	
		const sideBar = downSidebarArrowTarget.closest('.down-sidebar'),
		targetPlace = sideBar.querySelector('.down-sidebar__target-place'),
		row = sideBar.querySelector('.down-sidebar__row');
		
		sideBar.classList.toggle('is-active-2');
		if(sideBar.classList.contains('is-active-2')) {

			row.classList.remove('fade-out');
			targetPlace.style.removeProperty('--opacity');
			targetPlace.classList.add('fade-out');
			targetPlace.classList.remove('fade-in');
			
			setTimeout(() => {
				sideBar.classList.toggle('is-active');

				row.style.setProperty('--opacity', 0);
				row.classList.add('fade-in');
				row.classList.remove('fade-out');
			},300)

		} else if(!sideBar.classList.contains('is-active-2')) {

			targetPlace.classList.remove('fade-out');
			row.style.removeProperty('--opacity');
			row.classList.add('fade-out');

			setTimeout(() => {
				targetPlace.style.setProperty('--opacity', 0);
				sideBar.classList.toggle('is-active');

				targetPlace.classList.add('fade-in');
				targetPlace.classList.remove('fade-out');
			},300)

		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </down-sidebar> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <down-sidebar-chat> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const downSidebarChatItemAnswer = $(".down-sidebar__chat-item--answer")
	if(downSidebarChatItemAnswer) {
	
		const chat = downSidebarChatItemAnswer.closest('.down-sidebar__chat'),
		field = chat.querySelector('.down-sidebar__chat-user-panel input'),
		author = downSidebarChatItemAnswer.closest('.down-sidebar__chat-item');

		field.value = '@' + author.dataset.author + '. '
		field.focus();
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </down-sidebar-chat> -=-=-=-=-=-=-=-=-=-=-=-=

	

	// =-=-=-=-=-=-=-=-=-=-=-=- <block-is-active> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const addIsActive = $(".add-is-active")
	if(addIsActive) {
	
		const block = addIsActive.closest('.block-for-is-active');
		
		block.children[0].style.removeProperty('--opacity');
		block.children[0].style.removeProperty('--visibility');

		block.children[0].classList.add('fade-out');
		setTimeout(() => {
			block.children[0].classList.remove('fade-in');
			block.children[1].classList.remove('fade-out');
		},0)

		setTimeout(() => {
			block.classList.add('is-active');
			block.children[0].classList.remove('fade-out');
			block.children[0].style.removeProperty('--opacity');
			block.children[0].style.removeProperty('--visibility');
			block.children[1].style.setProperty('--opacity', 0);
			block.children[1].style.setProperty('--visibility', "hidden");
			block.children[1].classList.add('fade-in');
		},300)
	
	}

	const removeIsActive = $(".remove-is-active")
	if(removeIsActive) {
	
		const block = removeIsActive.closest('.block-for-is-active');
		
		block.children[1].style.removeProperty('--opacity');
		block.children[1].style.removeProperty('--visibility');
		block.children[1].classList.add('fade-out');

		setTimeout(() => {
			block.classList.remove('is-active');
			block.children[1].classList.remove('fade-out');
			block.children[1].style.removeProperty('--opacity');
			block.children[1].style.removeProperty('--visibility');
			block.children[0].style.setProperty('--opacity', 0);
			block.children[0].style.setProperty('--visibility', "hidden");
			block.children[0].classList.add('fade-in');
		},300)
	
	}

	const addActiveChangeTitle = $('[data-add-active-change-title]');
	if(addActiveChangeTitle) {
		const title = document.querySelector(`#${addActiveChangeTitle.dataset.addActiveChangeTitle}`);
		if(title) title.classList.add('is-active');
	}

	const removeActiveChangeTitle = $('[data-remove-active-change-title]');
	if(removeActiveChangeTitle) {
		const title = document.querySelector(`#${removeActiveChangeTitle.dataset.removeActiveChangeTitle}`);
		if(title) title.classList.remove('is-active');
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </block-is-active> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <message> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const messageClose = $(".message__close")
	if(messageClose) {
	
		const message = messageClose.closest('.message');
		message.classList.add('fade-out');
		setTimeout(() => {
			message.remove();
		},300)
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </message> -=-=-=-=-=-=-=-=-=-=-=-=


	// =-=-=-=-=-=-=-=-=-=-=-=- <summary-item> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const summaryItemTarget = $(".summary-item__target--toggle")
	if(summaryItemTarget) {
	
		const summaryItem = summaryItemTarget.closest('.summary-item');
		if(summaryItem.classList.contains('is-active')) {
			document.querySelectorAll('.summary-item.is-active').forEach(item => {
				item.classList.remove('is-active');
			})
		} else {
			document.querySelectorAll('.summary-item.is-active').forEach(item => {
				item.classList.remove('is-active');
			})

			summaryItem.classList.add('is-active');
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </summary-item> -=-=-=-=-=-=-=-=-=-=-=-=

	
	// =-=-=-=-=-=-=-=-=-=-=-=- <summary-favorite> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const summaryItemUserFavorite = $(".summary-item__user--favorite")
	if(summaryItemUserFavorite) {
	
		summaryItemUserFavorite.classList.toggle('is-active')
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </summary-favorite> -=-=-=-=-=-=-=-=-=-=-=-=

})

// =-=-=-=-=-=-=-=-=-=-=-=- </click-events> -=-=-=-=-=-=-=-=-=-=-=-=

window.addEventListener('contextmenu', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}

	// =-=-=-=-=-=-=-=-=-=-=-=- <drop-down-2> -=-=-=-=-=-=-=-=-=-=-=-=
		
	const dataDropDownTarget = $(".drop-down-2")
	if(dataDropDownTarget) {

		event.preventDefault();

		if(dataDropDownTarget.classList.contains('is-active-drop-down')) {
			/* document.querySelectorAll('.drop-down-2.is-active-drop-down').forEach(dropDownActive => {
				dropDownActive.classList.remove('is-active-drop-down')
				if(dropDownActive.closest('.section-table__row-block')) dropDownActive.closest('.section-table__row-block').classList.remove('on-active');
			}) */
			document.querySelectorAll('.drop-down-2__block.is-active').forEach(block => {
				setTimeout(() => {
					block.classList.remove('is-active');
				},0)
				block.classList.add('is-hidden')
			})

			document.querySelectorAll('.drop-down-2.is-active-drop-down').forEach(dropDownActive => {
				dropDownActive.classList.remove('is-active-drop-down')
				if(dropDownActive.closest('.section-table__row-block')) dropDownActive.closest('.section-table__row-block').classList.remove('on-active');
			})
		} else {
			document.querySelectorAll('.drop-down-2.is-active-drop-down').forEach(dropDownActive => {
				dropDownActive.classList.remove('is-active-drop-down')
				if(dropDownActive.closest('.section-table__row-block')) dropDownActive.closest('.section-table__row-block').classList.remove('on-active');
			})

			dataDropDownTarget.classList.add('is-active-drop-down')
			if(dataDropDownTarget.closest('.section-table__row-block')) dataDropDownTarget.closest('.section-table__row-block').classList.add('on-active');

			document.querySelectorAll('.drop-down-2__block.is-active').forEach(block => {
				setTimeout(() => {
					block.classList.add('is-hidden')
				},0)

				block.classList.remove('is-active')
				
			})

			if(dataDropDownTarget.querySelector('.drop-down-2__block')) {
				const block = dataDropDownTarget.querySelector('.drop-down-2__block');
				block.setAttribute('id', "drop-down-block-" + dropDownArray.length);
				dataDropDownTarget.setAttribute('data-drop-down-target', "drop-down-block-" + dropDownArray.length);
				dropDownArray.push(block);
				body.append(block);
			}

			const block = document.querySelector(`#${dataDropDownTarget.dataset.dropDownTarget}`);
			
			
			if(event.pageY + block.offsetHeight > window.innerHeight) {
				block.style.setProperty('--y', event.pageY - block.offsetHeight + 'px');
			} else {
				block.style.setProperty('--y', event.pageY + 'px');
			}

			if(event.pageX + block.offsetWidth > windowSize) {
				if(windowSize > 992) {
					block.style.setProperty('--x', window.innerWidth - block.offsetWidth - 20 + 'px');
				} else {
					block.style.setProperty('--x', window.innerWidth - block.offsetWidth + 40 + 'px');
				}
			} else {
				block.style.setProperty('--x', Math.max(100, Math.min(window.innerWidth - 70 - 20, event.pageX)) + 'px');
			}

			setTimeout(() => {
				block.classList.remove('is-hidden')
				setTimeout(() => {
					block.classList.add('is-active')
				},0)
			},0)
		}

	}

	// =-=-=-=-=-=-=-=-=-=-=-=- </drop-down-2> -=-=-=-=-=-=-=-=-=-=-=-=
})

// =-=-=-=-=-=-=-=-=-=- <Get-device-type> -=-=-=-=-=-=-=-=-=-=-

const getDeviceType = () => {

	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return "tablet";
	}

	if (
		/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
		ua
		)
	) {
		return "mobile";
	}
	return "desktop";

};

// =-=-=-=-=-=-=-=-=-=- </Get-device-type> -=-=-=-=-=-=-=-=-=-=-


body.addEventListener('pointerover', function (event) {
	if(getDeviceType() == "desktop" && windowSize > 992) {
		const row = event.target.closest('.section-table__row');
		if(row) {
			row.classList.add('is-active');

			const rows = row.closest('.section-table__main').querySelectorAll('.section-table__row');
			const params = row.querySelectorAll('.section-table__param');

			let indexParam = 0;
			params.forEach((param, index) => {
				if(param == event.target) indexParam = index;
			})

			rows.forEach(eachRow => {

				if(eachRow != row) {
					eachRow.classList.remove('is-active');
					if(eachRow.closest('.section-table__row-block')) eachRow.closest('.section-table__row-block').classList.remove('on-hover');
				}

				eachRow.querySelectorAll('.section-table__param').forEach((param, index) => {
					if(index == indexParam) {
						param.classList.add('is-active')
					} else {
						param.classList.remove('is-active')
					}
				})
			})

			if(row.closest('.section-table__row-block')) row.closest('.section-table__row-block').classList.add('on-hover');
			
		}

	}
})

document.querySelectorAll('.section-table__main').forEach((main, index) => {

	main.setAttribute('id', 'section-table-' + (index+1));
	const th = main.querySelectorAll('.section-table__head-th');
	let styles = '';
	th.forEach((th, thIndex) => {
		if(th.classList.contains('is-accent-col')) styles+=`#section-table-${index + 1} .section-table__param:nth-child(${thIndex + 1}) {background: var(--col-accent);}`;
	})

	main.insertAdjacentHTML("afterbegin", `<style>${styles}</style>`)
	const tableBody = main.querySelector('.section-table__body');

	const rows = main.querySelectorAll('.section-table__row');

	//const container = main.querySelector('.section-table__main--container');
	
	/* container.addEventListener('scroll', function (event) {
		gsap.to(container, {
			'--scroll-x': container.scrollLeft + 'px',
			duration: 0,
		})
	}) */

	rows.forEach((row, index) => {
		if(index % 2) {
			row.classList.add('is-even-mode');
		}
	})

	tableBody.addEventListener('pointerleave', function (event) {
		
		if(getDeviceType() == "desktop") {
			
			const rows = main.querySelectorAll('.section-table__row.is-active'),
			activeParams = main.querySelectorAll('.section-table__param.is-active');
	
			if(rows[0]) {	
				
				rows.forEach(row => {
					row.classList.remove('is-active');
					if(row.closest('.section-table__row-block')) row.closest('.section-table__row-block').classList.remove('on-hover');
				})
	
				activeParams.forEach((param, index) => {
					param.classList.remove('is-active')
				})
				
			}
	
		}
	})

})

document.querySelectorAll('.input-number').forEach(inputNumber => {
	inputNumber.addEventListener('input', function (event) {
		
		let result = inputNumber.value.replace(/[\D]+/g, '');
		
		if(event.inputType == "deleteContentBackward") {
			result = result.slice(0, -1);
		}

		inputNumber.value = result;

		if(result) {
			inputNumber.value = result + ' ' + inputNumber.dataset.addText;
		}
		
	})
})

// =-=-=-=-=-=-=-=-=-=-=-=- <get-coords> -=-=-=-=-=-=-=-=-=-=-=-=

function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + window.scrollX,
		right: box.right + window.scrollY,
		bottom: box.bottom + window.scrollX,
		left: box.left + window.scrollY
	};
}

// =-=-=-=-=-=-=-=-=-=-=-=- </get-coords> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let windowSize = 0;

function resize() {

	//html.style.setProperty("--height-header", header.offsetHeight + "px");
	html.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
	if(windowSize != window.innerWidth) {
		html.style.setProperty("--svh", window.innerHeight * 0.01 + "px");
	}

	document.querySelectorAll('.drop-down__block').forEach(dropDown => {
		
		if(getCoords(dropDown).right > window.innerWidth && !dropDown.closest('.drop-down').classList.contains('is-right-default')) {
			dropDown.closest('.drop-down').classList.add('is-right');
		} else {
			dropDown.closest('.drop-down').classList.remove('is-right');
		}
	})
	
	windowSize = window.innerWidth;

	document.querySelectorAll('.section-table__main').forEach((main, index) => {

		const rowsBlockList = main.querySelectorAll('.section-table__row-block--list');
		rowsBlockList.forEach(list => {
			const block = list.closest('.section-table__row-block');
			block.style.setProperty('--height', list.offsetHeight + 'px');
			block.style.setProperty('--negative-height', -list.offsetHeight + 'px');
		})

	})
}

resize();

window.addEventListener('resize', resize)

const downSidebar = document.querySelector('.down-sidebar');
if(aside || downSidebar) {
	setInterval(() => {
		if(aside) html.style.setProperty('--aside-width', aside.offsetWidth + 'px');
		if(downSidebar) html.style.setProperty('--down-sidebar-height', downSidebar.offsetHeight + 'px');
	},100)
}


// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

document.querySelectorAll('.section-table__change-date--slider, .section-table__change-full-date--slider').forEach(sliderElement => {

	const slides = sliderElement.querySelectorAll('.splide__slide');
	//activeSlide = sliderElement.querySelector('.splide__slide.is-disabled').previousElementSibling;

	//activeSlide.classList.add('is-active')

	const slider = new Splide(sliderElement, {

		perPage: 3,
		perMove: 3,
		pagination: false,
		focus: "center",
		gap: 0,

		/* breakpoints: {
			992: {
				// params
			},

			550: {
				// params
			}
		} */

	});

	slider.on('mounted', function () {
		slider.root.querySelectorAll('.splide__slide').forEach((slide, index) => {
			if(slide.querySelector('input').checked) {
				slider.go(index)
			}
		})
	})

	slider.mount();

})

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


document.querySelectorAll('.custom-select').forEach(select => {
	new SlimSelect({
		select: select,
		settings: {
			showSearch: false,
		}
	})
})

document.querySelectorAll('.popup-checkbox-list').forEach(list => {
	const inputs = list.querySelectorAll('input'),
	checkedList = document.querySelector('#' + list.dataset.checkedListId);
	inputs.forEach(input => {
		input.addEventListener('change', function (event) {
			let allChecked = false;

			if(input.classList.contains('all-check')) {
				if(input.checked) {
					allChecked = true;
					inputs.forEach(input => {
						if(!input.classList.contains('all-check')) {
							input.checked = true;
						}
					})
				} else {
					inputs.forEach(input => {
						if(!input.classList.contains('all-check')) {
							input.checked = false;
						}
					})	
				}
				
			} else {
				inputs.forEach(input => {
					if(input.classList.contains('all-check')) {
						input.checked = false;
					}
				})
			}

			let counter = 0, noneChecked = true;
			if(allChecked) {
				noneChecked = false;
				checkedList.title = checkedList.dataset.allText;
				checkedList.textContent = checkedList.dataset.allText;

			} else {
				inputs.forEach(input => {
					if(input.checked) {
						noneChecked = false
						const text = input.nextElementSibling.nextElementSibling.textContent;
						if(counter == 0) {
							checkedList.title = text.trim();
							checkedList.textContent = text.trim();
						} else {
							checkedList.textContent += ', ' + text.trim();
							checkedList.title += ', ' + text.trim();
						}
	
						counter++;
					}
				})
			}
			

			if(noneChecked) {
				checkedList.title = checkedList.dataset.noneText;
				checkedList.textContent = checkedList.dataset.noneText;
			}
		})
	})
	
})

document.querySelectorAll('.section-table__change-full-date').forEach(changeFullDate => {
	const targetText = changeFullDate.querySelector('.section-table__change-full-date--target span'),
	months = changeFullDate.querySelector('.section-table__change-full-date--months'),
	years = changeFullDate.querySelector('.section-table__change-full-date--slider');

	let checkedMonth = months.querySelector('input:checked').nextElementSibling.textContent,
	yearChecked = years.querySelector('input:checked').nextElementSibling.textContent;

	months.querySelectorAll('input').forEach(input => {
		input.addEventListener('change', function (event) {
			if(input.checked) {
				checkedMonth = input.nextElementSibling.textContent;
				targetText.textContent = checkedMonth + ', ' + yearChecked;
			}
		})
	})

	years.querySelectorAll('input').forEach(input => {
		input.addEventListener('change', function (event) {
			if(input.checked) {
				yearChecked = input.nextElementSibling.textContent;
				targetText.textContent = checkedMonth + ', ' + yearChecked;
			}
		})
	})

})

const dateInputs = document.querySelectorAll('.date-input');
dateInputs.forEach(input => {
	const datepicker = new Datepicker(input, {
		todayButton: true,	
	}); 
})

document.querySelectorAll('.section-table__time--block').forEach(block => {

	const fromHours = block.querySelector('.from-hours'),
	fromMinutes = block.querySelector('.from-minutes'),
	toHours = block.querySelector('.to-hours'),
	toMinutes = block.querySelector('.to-minutes');

	let nowDate = new Date();

	const selects = block.querySelectorAll('.custom-select');
	selects.forEach(select => {
		select.addEventListener('change', function (event) {

			let startDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), Number(fromHours.value), Number(fromMinutes.value), 0, 0),
				endDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), Number(toHours.value), Number(toMinutes.value), 0, 0);

			let diff = endDate - startDate;
			if(diff <= 0) {
				endDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()+1, Number(toHours.value), Number(toMinutes.value), 0, 0);
			}

			diff = endDate - startDate;
			
			const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
			
			document.querySelectorAll('.hours-input').forEach(input => {
				input.value = hours + ' ' + input.dataset.addText;
			})
		})
	})

	/* fromHours.addEventListener('change', function (event) {
		let startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), Number(fromHours.value), Number(fromMinutes.value), 0, 0),
		endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), Number(toHours.value), Number(toMinutes.value), 0, 0);

		console.log(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), Number(fromHours.value), Number(fromMinutes.value), 0, 0));
		
	}) */
})

window.addEventListener('load', function (event) {
	body.classList.add('is-init')
})

document.querySelectorAll('.copy-btn').forEach(copyBtn => {
	const clipboard = new ClipboardJS(copyBtn);
	clipboard.on('success', function (event) {
		const input = copyBtn.parentElement.querySelector('.copy-input');
		input.select();
	})
})

// =-=-=-=-=-=-=-=-=-=-=-=- <popup> -=-=-=-=-=-=-=-=-=-=-=-=

function Popup(arg) {

	let body = document.querySelector('body'),
		html = document.querySelector('html'),
		saveID = (typeof arg == 'object') ? (arg['saveID']) ? true : false : false,
		popupCheck = true,
		popupCheckClose = true;

	const removeHash = function () {
		let uri = window.location.toString();
		if (uri.indexOf("#") > 0) {
			let clean_uri = uri.substring(0, uri.indexOf("#"));
			window.history.replaceState({}, document.title, clean_uri);
		}
	}

	const open = function (id, initStart) {

		if (popupCheck) {
			popupCheck = false;

			let popup = document.querySelector(id);

			if (popup) {

				if(popup.classList.contains('popup')) {

					if(document.querySelector(`[href="${id}"]`)) {
						document.querySelector(`[href="${id}"]`).classList.add('is-active-popup');
					}

					popup.style.display = 'flex';

					body.classList.remove('is-popup-active');
					html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
					body.classList.add('is-popup-active');

					if (saveID && !popup.classList.contains('is-sub')) history.pushState('', "", id);

					setTimeout(() => {
						if (!initStart) {
							popup.classList.add('is-active');
							setTimeout(() => {
								popupCheck = true;
							},300)
						} else {
							popup.classList.add('is-transition-none');
							popup.classList.add('is-active');
							popupCheck = true;
						}

					}, 0)
				}

			} else {
				return new Error(`Not found "${id}"`)
			}
		}
	}

	const close = function (popupClose) {

		if (popupCheckClose) {
			popupCheckClose = false;

			let popup
			if (typeof popupClose === 'string') {
				popup = document.querySelector(popupClose)
			} else {
				popup = popupClose.closest('.popup');
			}

			if (popup.classList.contains('is-transition-none')) popup.classList.remove('is-transition-none')

			setTimeout(() => {

				popup.classList.remove('is-active');
				if(document.querySelector(`.is-active-popup[href="#${popup.getAttribute('id')}"]`)) {
					document.querySelector(`.is-active-popup[href="#${popup.getAttribute('id')}"]`).classList.remove('is-active-popup');
				}

				function closeFunc() {
					const activePopups = document.querySelectorAll('.popup.is-active');

					if (activePopups.length < 1) {
						body.classList.remove('is-popup-active');
						html.style.setProperty('--popup-padding', '0px');
					}

					if (saveID && !popup.classList.contains('is-sub')) {
						removeHash();
						if (activePopups[activePopups.length - 1]) {
							history.pushState('', "", "#" + activePopups[activePopups.length - 1].getAttribute('id'));
						}
					}

					popupCheckClose = true;
					popup.style.display = 'none';
				}

				setTimeout(() => {
					closeFunc();
				},300)

			}, 0)

		}

	}

	return {

		open: function (id) {
			open(id);
		},

		close: function (popupClose) {
			close(popupClose)
		},

		init: function () {

			let thisTarget
			body.addEventListener('click', function (event) {

				thisTarget = event.target;

				let popupOpen = thisTarget.closest('.open-popup');
				if (popupOpen) {
					event.preventDefault();
					open(popupOpen.getAttribute('href'))
				}

				let popupClose = thisTarget.closest('.popup-close');
				if (popupClose) {
					close(popupClose)
				}

			});

			body.addEventListener('keyup', function (event) {

				if(event.code == 27 && document.querySelector('.popup.is-active')) {
					close(document.querySelector('.popup.is-active'));
				}

			});

			if (saveID) {
				let url = new URL(window.location);
				if (url.hash) {
					open(url.hash, true);
				}
			}
		},

	}
}

const popup = new Popup({
	saveID: true, // false
});

popup.init()

// =-=-=-=-=-=-=-=-=-=-=-=- </popup> -=-=-=-=-=-=-=-=-=-=-=-=

