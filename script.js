document.addEventListener('DOMContentLoaded', () => {
    // กำหนดตัวแปรสำหรับองค์ประกอบ DOM
    const elements = {
        noBtn: document.getElementById('no-btn'),
        yesBtn: document.getElementById('yes-btn'),
        mainPage: document.getElementById('main-page'),
        noWayPage: document.getElementById('no-way-page'),
        goodbyePage: document.getElementById('goodbye-page'),
        thankYouPage: document.getElementById('thank-you-page'),
        loveLetterPage: document.getElementById('love-letter-page'),
        slideshowPage: document.getElementById('slideshow-page'),
        blessingPage: document.getElementById('blessing-page'),
        finalThanksPage: document.getElementById('final-thanks-page'),
        music: document.getElementById('music'),
        noMusic: document.getElementById('no-music'),
        waitMessage: document.getElementById('wait-message'),
        countdownMessage: document.getElementById('countdown-message'),
        birthdayPrompt: document.getElementById('birthday-prompt'),
        birthdayInput: document.getElementById('birthday-input'),
        motherNameInput: document.getElementById('mother-name-input'),
        confirmBtn: document.getElementById('confirm-btn'),
        errorMessage: document.getElementById('error-message'),
        emailStatus: document.getElementById('email-status'),
        nextBtn: document.getElementById('next-btn'),
        namePrompt: document.getElementById('name-prompt'),
        nameInput: document.getElementById('name-input'),
        codeInput: document.getElementById('code-input'),
        confirmNameBtn: document.getElementById('confirm-name-btn'),
        nameErrorMessage: document.getElementById('name-error-message'),
        slideCaption: document.getElementById('slide-caption'),
        nextSlideBtn: document.getElementById('next-slide-btn'),
        finalBtn: document.getElementById('final-btn'),
        closeBtn: document.getElementById('close-btn'),
        heartShower: document.getElementById('heart-shower'),
        funnyQuote: document.getElementById('funny-quote'),
        confetti: document.getElementById('confetti')
    };

    let clickCount = 0;

    const captions = [
        "ฉันหลงรักเธอ",
        "รอยยิ้มของเธอที่ฉันหลงรัก",
        "โมเมนต์ดีๆ ที่เรามีด้วยกัน",
        "ความทรงจำที่ฉันจะเก็บไว้ตลอดไป",
        "อนาคตที่ฉันอยากมีกับเธอ"
    ];

    const funnyQuotes = [
        "รักเหมือน Wi-Fi จับสัญญาณได้ แต่ไม่รู้จะเสถียรแค่ไหน!",
        "เธอคือกาแฟของฉัน ตื่นเต้นทุกครั้งที่เจอ!",
        "รักเธอมาก จนลืมไปว่าเคยโสด!",
        "เธอคือ GPS ของฉัน ทำให้หลงทางในใจตลอด!",
        "รักเธอแบบไม่มีวันหมดอายุ... เหมือนบะหมี่กึ่งสำเร็จรูป!"
    ];

    // ตรวจสอบองค์ประกอบที่จำเป็นและบันทึกข้อผิดพลาด
    const requiredElements = [
        'yesBtn', 'noBtn', 'mainPage', 'noWayPage', 'goodbyePage', 'confirmBtn',
        'nextBtn', 'confirmNameBtn', 'nextSlideBtn', 'codeInput', 'finalBtn',
        'motherNameInput'
    ];
    const missingElements = requiredElements.filter(key => !elements[key]);
    if (missingElements.length > 0) {
        console.error('ไม่พบองค์ประกอบที่จำเป็น:', missingElements.join(', '));
        // ดำเนินการต่อโดยแจ้งเตือน แต่ไม่หยุดโค้ด
    }

    // เริ่มต้นหน้า
    if (elements.mainPage) elements.mainPage.style.display = 'flex';
    if (elements.noWayPage) elements.noWayPage.style.display = 'none';
    if (elements.goodbyePage) elements.goodbyePage.style.display = 'none';
    if (elements.thankYouPage) elements.thankYouPage.style.display = 'none';
    if (elements.loveLetterPage) elements.loveLetterPage.style.display = 'none';
    if (elements.slideshowPage) elements.slideshowPage.style.display = 'none';
    if (elements.blessingPage) elements.blessingPage.style.display = 'none';
    if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'none';
    if (elements.waitMessage) elements.waitMessage.style.display = 'none';
    if (elements.countdownMessage) elements.countdownMessage.style.display = 'none';
    if (elements.birthdayPrompt) elements.birthdayPrompt.classList.remove('active');
    if (elements.emailStatus) elements.emailStatus.style.display = 'none';
    if (elements.namePrompt) elements.namePrompt.style.display = 'none';

    // UI 1: Heart Shower on Yes Button Hover
    if (elements.yesBtn && elements.heartShower) {
        elements.yesBtn.addEventListener('mouseover', () => {
            for (let i = 0; i < 10; i++) {
                const heart = document.createElement('span');
                heart.innerHTML = '♥';
                heart.className = 'shower-heart';
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.top = `${Math.random() * 100}%`;
                elements.heartShower.appendChild(heart);
                setTimeout(() => heart.remove(), 1000);
            }
        });
    }

    // ปุ่ม "ไม่เป็น"
    if (elements.noBtn) {
        elements.noBtn.addEventListener('click', () => {
            console.log('กดปุ่ม ไม่เป็น');
            clickCount++;

            // เล่นเพลงเมื่อกด "ไม่เป็น"
            if (elements.noMusic) {
                try {
                    elements.noMusic.currentTime = 0;
                    elements.noMusic.play().then(() => {
                        console.log('เล่นเพลง no-music สำเร็จ');
                    }).catch(error => {
                        console.error('ข้อผิดพลาดในการเล่นเพลง no-music: ', error);
                        if (elements.emailStatus) {
                            elements.emailStatus.textContent = 'เกิดข้อผิดพลาดในการเล่นเพลง';
                            elements.emailStatus.className = 'email-status error';
                            elements.emailStatus.style.display = 'block';
                            setTimeout(() => {
                                elements.emailStatus.style.display = 'none';
                            }, 3000);
                        }
                    });
                } catch (error) {
                    console.error('ข้อผิดพลาดในการจัดการ noMusic: ', error);
                }
            }

            // ส่งอีเมล
            const params = {
                date: new Date().toLocaleString('th-TH'),
                action: 'ขอบคุณและโชคดี',
                click_count: clickCount
            };
            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_7c1i969', 'template_26ighte', params)
                    .then((response) => {
                        console.log('ส่งอีเมลสำเร็จสำหรับปุ่ม ไม่เป็น!', response.status, response.text);
                        if (elements.emailStatus) {
                            elements.emailStatus.textContent = 'ส่งอีเมลสำเร็จ (กดไม่เป็น)';
                            elements.emailStatus.className = 'email-status success';
                            elements.emailStatus.style.display = 'block';
                            setTimeout(() => {
                                elements.emailStatus.style.display = 'none';
                            }, 3000);
                        }
                    })
                    .catch((error) => {
                        console.error('ข้อผิดพลาดในการส่งอีเมลสำหรับปุ่ม ไม่เป็น: ', error);
                        if (elements.emailStatus) {
                            elements.emailStatus.textContent = 'เกิดข้อผิดพลาดในการส่งอีเมล';
                            elements.emailStatus.className = 'email-status error';
                            elements.emailStatus.style.display = 'block';
                            setTimeout(() => {
                                elements.emailStatus.style.display = 'none';
                            }, 3000);
                        }
                    });
            } else {
                console.error('EmailJS ไม่โหลด');
            }

            // เปลี่ยนหน้า
            if (elements.mainPage) elements.mainPage.style.display = 'none';
            if (elements.noWayPage) elements.noWayPage.style.display = 'flex';
            console.log('เปลี่ยนไป UI ไม่เป็น');
        });
    }

    // ปุ่ม "ปิด" ในหน้า no-way-page
    if (elements.closeBtn) {
        elements.closeBtn.addEventListener('click', () => {
            console.log('กดปุ่ม ปิด');
            if (elements.noWayPage) elements.noWayPage.style.display = 'none';
            if (elements.goodbyePage) elements.goodbyePage.style.display = 'flex';
            if (elements.mainPage) elements.mainPage.style.display = 'none';
            if (elements.thankYouPage) elements.thankYouPage.style.display = 'none';
            if (elements.loveLetterPage) elements.loveLetterPage.style.display = 'none';
            if (elements.slideshowPage) elements.slideshowPage.style.display = 'none';
            if (elements.blessingPage) elements.blessingPage.style.display = 'none';
            if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'none';
            if (elements.noMusic) {
                try {
                    elements.noMusic.pause();
                    elements.noMusic.currentTime = 0;
                } catch (error) {
                    console.error('ข้อผิดพลาดในการหยุด noMusic: ', error);
                }
            }
            console.log('เปลี่ยนไป UI บอกลา');
        });
    }

    // ฟังก์ชันดำเนินการเมื่อตอบถูก
    function proceedAfterCorrectAnswer() {
        if (elements.mainPage) elements.mainPage.style.display = 'none';
        if (elements.noWayPage) elements.noWayPage.style.display = 'none';
        if (elements.goodbyePage) elements.goodbyePage.style.display = 'none';
        if (elements.thankYouPage) elements.thankYouPage.style.display = 'flex';
        if (elements.loveLetterPage) elements.loveLetterPage.style.display = 'none';
        if (elements.slideshowPage) elements.slideshowPage.style.display = 'none';
        if (elements.blessingPage) elements.blessingPage.style.display = 'none';
        if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'none';

        if (elements.music) {
            try {
                elements.music.play().then(() => {
                    console.log('เพลงเล่นสำเร็จ');
                }).catch(error => {
                    console.error('ข้อผิดพลาดในการเล่นเพลง: ', error);
                    if (elements.emailStatus) {
                        elements.emailStatus.textContent = 'เกิดข้อผิดพลาดในการเล่นเพลง';
                        elements.emailStatus.className = 'email-status error';
                        elements.emailStatus.style.display = 'block';
                    }
                });
            } catch (error) {
                console.error('ข้อผิดพลาดในการจัดการ music: ', error);
            }
        }

        const params = {
            date: new Date().toLocaleString('th-TH'),
            action: 'เป็น'
        };
        if (typeof emailjs !== 'undefined') {
            emailjs.send('service_7c1i969', 'template_czki5u6', params)
                .then((response) => {
                    console.log('ส่งอีเมลสำเร็จสำหรับปุ่ม เป็น!', response.status, response.text);
                    if (elements.emailStatus) {
                        elements.emailStatus.textContent = 'ส่งอีเมลสำเร็จ (กดเป็น)';
                        elements.emailStatus.className = 'email-status success';
                        elements.emailStatus.style.display = 'block';
                    }
                })
                .catch((error) => {
                    console.error('ข้อผิดพลาดในการส่งอีเมลสำหรับปุ่ม เป็น: ', error);
                    if (elements.emailStatus) {
                        elements.emailStatus.textContent = 'เกิดข้อผิดพลาดในการส่งอีเมล';
                        elements.emailStatus.className = 'email-status error';
                        elements.emailStatus.style.display = 'block';
                    }
                });
        }

        setTimeout(() => {
            if (elements.waitMessage) elements.waitMessage.style.display = 'block';
            if (elements.funnyQuote) {
                elements.funnyQuote.textContent = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
                elements.funnyQuote.style.display = 'block';
            }
            if (elements.countdownMessage) elements.countdownMessage.style.display = 'block';
            console.log('แสดงข้อความ รอฟังเพลง, คำพูดตลก, และ รอ 5 วินาที');
        }, 500);

        setTimeout(() => {
            if (elements.thankYouPage) elements.thankYouPage.style.display = 'none';
            if (elements.loveLetterPage) elements.loveLetterPage.style.display = 'flex';
            if (elements.slideshowPage) elements.slideshowPage.style.display = 'none';
            if (elements.blessingPage) elements.blessingPage.style.display = 'none';
            if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'none';
            console.log('เปลี่ยนไป UI ที่ 3');
        }, 5500);
    }

    // ปุ่ม "เป็น"
    if (elements.yesBtn) {
        elements.yesBtn.addEventListener('click', () => {
            console.log('กดปุ่ม เป็น');
            if (elements.birthdayPrompt) elements.birthdayPrompt.classList.add('active');
            if (elements.birthdayInput) elements.birthdayInput.value = '';
            if (elements.motherNameInput) elements.motherNameInput.value = '';
            if (elements.errorMessage) elements.errorMessage.style.display = 'none';
            if (elements.yesBtn) elements.yesBtn.style.display = 'none';
            if (elements.noBtn) elements.noBtn.style.display = 'none';
        });
    }

    // ปุ่ม "ยืนยัน" (วันเกิดและสิ่งที่กลัว)
    if (elements.confirmBtn) {
        elements.confirmBtn.addEventListener('click', () => {
            const userAnswer = elements.birthdayInput ? elements.birthdayInput.value.trim() : '';
            const motherName = elements.motherNameInput ? elements.motherNameInput.value.trim() : '';
            console.log('วันเกิดที่กรอก: ', userAnswer, 'สิ่งที่กลัวที่กรอก: ', motherName);

            if (userAnswer === '09/11/2011' && motherName === 'ลูกโป่ง') {
                console.log('วันเกิดและสิ่งที่กลัวถูกต้อง!');
                if (elements.birthdayPrompt) elements.birthdayPrompt.classList.remove('active');
                proceedAfterCorrectAnswer();
            } else {
                console.log('วันเกิดหรือสิ่งที่กลัวผิด');
                if (elements.errorMessage) elements.errorMessage.style.display = 'block';
                if (elements.birthdayInput) elements.birthdayInput.value = '';
                if (elements.motherNameInput) elements.motherNameInput.value = '';
            }
        });
    }

    // ปุ่ม "ถัดไป" จาก UI 3
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', () => {
            console.log('กดปุ่ม ถัดไป');
            if (elements.namePrompt) {
                elements.namePrompt.classList.add('active');
                elements.namePrompt.style.display = 'block';
            }
            if (elements.nameInput) elements.nameInput.value = '';
            if (elements.codeInput) elements.codeInput.value = '';
            if (elements.nameErrorMessage) elements.nameErrorMessage.style.display = 'none';
            if (elements.nextBtn) {
                elements.nextBtn.style.opacity = '0';
                setTimeout(() => {
                    elements.nextBtn.style.display = 'none';
                }, 300);
            }
        });
    }

    // ปุ่ม "ยืนยัน" (ชื่อและรหัส)
    if (elements.confirmNameBtn) {
        elements.confirmNameBtn.addEventListener('click', () => {
            const userName = elements.nameInput ? elements.nameInput.value.trim() : '';
            const userCode = elements.codeInput ? elements.codeInput.value.trim() : '';
            console.log('ชื่อที่กรอก: ', userName, 'รหัสที่กรอก: ', userCode);

            if (userName === 'กิตติคุณ' && userCode === 'ที่รัก') {
                console.log('ชื่อและรหัสถูกต้อง!');
                if (elements.namePrompt) {
                    elements.namePrompt.classList.remove('active');
                    elements.namePrompt.style.display = 'none';
                }
                if (elements.loveLetterPage) elements.loveLetterPage.style.display = 'none';
                if (elements.slideshowPage) elements.slideshowPage.style.display = 'flex';
                if (elements.blessingPage) elements.blessingPage.style.display = 'none';
                if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'none';
                startSlideshow();
            } else {
                console.log('ชื่อหรือรหัสผิด');
                if (elements.nameErrorMessage) elements.nameErrorMessage.style.display = 'block';
                if (elements.nameInput) elements.nameInput.value = '';
                if (elements.codeInput) elements.codeInput.value = '';
            }
        });
    }

    // ปุ่ม "ถัดไป" จาก UI 4 ไป UI 5
    if (elements.nextSlideBtn) {
        elements.nextSlideBtn.addEventListener('click', () => {
            console.log('กดปุ่ม ถัดไปไป UI 5');
            if (elements.slideshowPage) elements.slideshowPage.style.display = 'none';
            if (elements.blessingPage) elements.blessingPage.style.display = 'flex';
            if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'none';
            triggerConfetti();
        });
    }

    // ปุ่ม "ถัดไป" จาก UI 5 ไป UI 6
    if (elements.finalBtn) {
        elements.finalBtn.addEventListener('click', () => {
            console.log('กดปุ่ม ถัดไปไป UI 6');
            if (elements.blessingPage) elements.blessingPage.style.display = 'none';
            if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'flex';
        });
    }

    // UI 5: Confetti Burst
    function triggerConfetti() {
        if (!elements.confetti) return;
        for (let i = 0; i < 50; i++) {
            const confettiPiece = document.createElement('span');
            confettiPiece.className = 'confetti-piece';
            confettiPiece.style.left = `${Math.random() * 100}%`;
            confettiPiece.style.backgroundColor = ['#ff3399', '#ff66b3', '#ff99cc'][Math.floor(Math.random() * 3)];
            confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
            elements.confetti.appendChild(confettiPiece);
            setTimeout(() => confettiPiece.remove(), 3000);
        }
    }

    // ฟังก์ชันสไลด์โชว์พร้อมข้อความ
    function startSlideshow() {
        const slides = document.querySelectorAll('.slide-image');
        if (!slides.length || !elements.slideCaption) return;

        let currentSlide = 0;
        let slideCount = 0;

        function showNextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
            if (elements.slideCaption) {
                elements.slideCaption.textContent = captions[currentSlide];
                elements.slideCaption.classList.add('wiggle');
                setTimeout(() => elements.slideCaption.classList.remove('wiggle'), 1000);
            }
            slideCount++;

            if (slideCount === slides.length && elements.nextSlideBtn) {
                elements.nextSlideBtn.style.display = 'block';
                elements.nextSlideBtn.style.opacity = '1';
            }
        }

        slides.forEach(slide => slide.classList.remove('active'));
        slides[0].classList.add('active');
        if (elements.slideCaption) {
            elements.slideCaption.textContent = captions[0];
            elements.slideCaption.classList.add('wiggle');
            setTimeout(() => elements.slideCaption.classList.remove('wiggle'), 1000);
        }

        const slideInterval = setInterval(showNextSlide, 3000);
    }

    // ฟังก์ชันแชร์ไปโซเชียลมีเดีย
    window.shareTo = function(platform) {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('มาดูเรื่องราวความรักสุดหวานนี้กัน! 💖');
        let shareUrl;

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
    };
});



document.addEventListener('DOMContentLoaded', () => {
    // กำหนดตัวแปรสำหรับองค์ประกอบ DOM
    const elements = {
        noBtn: document.getElementById('no-btn'),
        yesBtn: document.getElementById('yes-btn'),
        mainPage: document.getElementById('main-page'),
        noWayPage: document.getElementById('no-way-page'),
        goodbyePage: document.getElementById('goodbye-page'),
        thankYouPage: document.getElementById('thank-you-page'),
        loveLetterPage: document.getElementById('love-letter-page'),
        slideshowPage: document.getElementById('slideshow-page'),
        blessingPage: document.getElementById('blessing-page'),
        finalThanksPage: document.getElementById('final-thanks-page'),
        music: document.getElementById('music'),
        noVideo: document.getElementById('no-video'),
        goodbyeVideo: document.getElementById('goodbye-video'),
        stopVideoBtn: document.querySelectorAll('.stop-video-btn'),
        waitMessage: document.getElementById('wait-message'),
        countdownMessage: document.getElementById('countdown-message'),
        birthdayPrompt: document.getElementById('birthday-prompt'),
        birthdayInput: document.getElementById('birthday-input'),
        motherNameInput: document.getElementById('mother-name-input'),
        confirmBtn: document.getElementById('confirm-btn'),
        errorMessage: document.getElementById('error-message'),
        emailStatus: document.getElementById('email-status'),
        nextBtn: document.getElementById('next-btn'),
        namePrompt: document.getElementById('name-prompt'),
        nameInput: document.getElementById('name-input'),
        codeInput: document.getElementById('code-input'),
        confirmNameBtn: document.getElementById('confirm-name-btn'),
        nameErrorMessage: document.getElementById('name-error-message'),
        slideCaption: document.getElementById('slide-caption'),
        nextSlideBtn: document.getElementById('next-slide-btn'),
        finalBtn: document.getElementById('final-btn'),
        closeBtn: document.getElementById('close-btn'),
        heartShower: document.getElementById('heart-shower'),
        funnyQuote: document.getElementById('funny-quote'),
        confetti: document.getElementById('confetti')
    };

    let clickCount = 0;
    let currentVideoTime = 0;

    // ตรวจสอบองค์ประกอบที่จำเป็นและบันทึกข้อผิดพลาด
    const requiredElements = [
        'yesBtn', 'noBtn', 'mainPage', 'noWayPage', 'goodbyePage', 'confirmBtn',
        'nextBtn', 'confirmNameBtn', 'nextSlideBtn', 'codeInput', 'finalBtn',
        'motherNameInput', 'noVideo', 'goodbyeVideo'
    ];
    const missingElements = requiredElements.filter(key => !elements[key]);
    if (missingElements.length > 0) {
        console.error('ไม่พบองค์ประกอบที่จำเป็น:', missingElements.join(', '));
    }

    // ปุ่ม "ไม่เป็น"
    if (elements.noBtn) {
        elements.noBtn.addEventListener('click', () => {
            console.log('กดปุ่ม ไม่เป็น');
            clickCount++;

            // เล่นวิดีโอเมื่อกด "ไม่เป็น"
            if (elements.noVideo) {
                try {
                    elements.noVideo.currentTime = currentVideoTime;
                    elements.noVideo.play().then(() => {
                        console.log('เล่นวิดีโอ no-video สำเร็จ');
                        elements.stopVideoBtn.forEach(btn => {
                            btn.style.display = 'block';
                        });
                    }).catch(error => {
                        console.error('ข้อผิดพลาดในการเล่นวิดีโอ no-video: ', error);
                        if (elements.emailStatus) {
                            elements.emailStatus.textContent = 'เกิดข้อผิดพลาดในการเล่นวิดีโอ';
                            elements.emailStatus.className = 'email-status error';
                            elements.emailStatus.style.display = 'block';
                            setTimeout(() => {
                                elements.emailStatus.style.display = 'none';
                            }, 3000);
                        }
                    });
                } catch (error) {
                    console.error('ข้อผิดพลาดในการจัดการ noVideo: ', error);
                }
            }

            // ส่งอีเมล
            const params = {
                date: new Date().toLocaleString('th-TH'),
                action: 'ขอบคุณและโชคดี',
                click_count: clickCount
            };
            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_7c1i969', 'template_26ighte', params)
                    .then((response) => {
                        console.log('ส่งอีเมลสำเร็จสำหรับปุ่ม ไม่เป็น!', response.status, response.text);
                        if (elements.emailStatus) {
                            elements.emailStatus.textContent = 'ส่งอีเมลสำเร็จ (กดไม่เป็น)';
                            elements.emailStatus.className = 'email-status success';
                            elements.emailStatus.style.display = 'block';
                            setTimeout(() => {
                                elements.emailStatus.style.display = 'none';
                            }, 3000);
                        }
                    })
                    .catch((error) => {
                        console.error('ข้อผิดพลาดในการส่งอีเมลสำหรับปุ่ม ไม่เป็น: ', error);
                        if (elements.emailStatus) {
                            elements.emailStatus.textContent = 'เกิดข้อผิดพลาดในการส่งอีเมล';
                            elements.emailStatus.className = 'email-status error';
                            elements.emailStatus.style.display = 'block';
                            setTimeout(() => {
                                elements.emailStatus.style.display = 'none';
                            }, 3000);
                        }
                    });
            } else {
                console.error('EmailJS ไม่โหลด');
            }

            // เปลี่ยนหน้า
            if (elements.mainPage) elements.mainPage.style.display = 'none';
            if (elements.noWayPage) elements.noWayPage.style.display = 'flex';
            console.log('เปลี่ยนไป UI ไม่เป็น');
        });
    }

    // ปุ่ม "หยุดวิดีโอ"
    if (elements.stopVideoBtn) {
        elements.stopVideoBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                try {
                    if (elements.noVideo && elements.noWayPage.style.display === 'flex') {
                        elements.noVideo.pause();
                        currentVideoTime = elements.noVideo.currentTime;
                        console.log('หยุดวิดีโอ no-video ที่เวลา: ', currentVideoTime);
                    }
                    if (elements.goodbyeVideo && elements.goodbyePage.style.display === 'flex') {
                        elements.goodbyeVideo.pause();
                        currentVideoTime = elements.goodbyeVideo.currentTime;
                        console.log('หยุดวิดีโอ goodbye-video ที่เวลา: ', currentVideoTime);
                    }
                    elements.stopVideoBtn.forEach(b => {
                        b.style.display = 'none';
                    });
                } catch (error) {
                    console.error('ข้อผิดพลาดในการหยุดวิดีโอ: ', error);
                }
            });
        });
    }

    // ปุ่ม "ปิด" ในหน้า no-way-page
    if (elements.closeBtn) {
        elements.closeBtn.addEventListener('click', () => {
            console.log('กดปุ่ม ปิด');

            // บันทึกเวลาเล่นของวิดีโอจาก no-way-page
            if (elements.noVideo) {
                try {
                    currentVideoTime = elements.noVideo.currentTime;
                    elements.noVideo.pause();
                    console.log('บันทึกเวลา no-video: ', currentVideoTime);
                } catch (error) {
                    console.error('ข้อผิดพลาดในการบันทึกเวลา noVideo: ', error);
                }
            }

            // เปลี่ยนหน้า
            if (elements.noWayPage) elements.noWayPage.style.display = 'none';
            if (elements.goodbyePage) elements.goodbyePage.style.display = 'flex';
            if (elements.mainPage) elements.mainPage.style.display = 'none';
            if (elements.thankYouPage) elements.thankYouPage.style.display = 'none';
            if (elements.loveLetterPage) elements.loveLetterPage.style.display = 'none';
            if (elements.slideshowPage) elements.slideshowPage.style.display = 'none';
            if (elements.blessingPage) elements.blessingPage.style.display = 'none';
            if (elements.finalThanksPage) elements.finalThanksPage.style.display = 'none';

            // เล่นวิดีโอต่อใน goodbye-page
            if (elements.goodbyeVideo) {
                try {
                    elements.goodbyeVideo.currentTime = currentVideoTime;
                    elements.goodbyeVideo.play().then(() => {
                        console.log('เล่นวิดีโอ goodbye-video ต่อที่เวลา: ', currentVideoTime);
                        elements.stopVideoBtn.forEach(btn => {
                            btn.style.display = 'block';
                        });
                    }).catch(error => {
                        console.error('ข้อผิดพลาดในการเล่นวิดีโอ goodbye-video: ', error);
                        if (elements.emailStatus) {
                            elements.emailStatus.textContent = 'เกิดข้อผิดพลาดในการเล่นวิดีโอ';
                            elements.emailStatus.className = 'email-status error';
                            elements.emailStatus.style.display = 'block';
                            setTimeout(() => {
                                elements.emailStatus.style.display = 'none';
                            }, 3000);
                        }
                    });
                } catch (error) {
                    console.error('ข้อผิดพลาดในการจัดการ goodbyeVideo: ', error);
                }
            }

            console.log('เปลี่ยนไป UI บอกลา');
        });
    }

    // ส่วนที่เหลือของโค้ดไม่เปลี่ยนแปลง
    // ... (โค้ดที่เหลือเหมือนเดิม)
});