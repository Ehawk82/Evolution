// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509

(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var isFirstActivation = true;

    var ViewManagement = Windows.UI.ViewManagement;
    var ApplicationViewWindowingMode = ViewManagement.ApplicationViewWindowingMode;
    var ApplicationView = ViewManagement.ApplicationView;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.voiceCommand) {
            // TODO: Handle relevant ActivationKinds. For example, if your app can be started by voice commands,
            // this is a good place to decide whether to populate an input field or choose a different initial view.
        }
        else if (args.detail.kind === activation.ActivationKind.launch) {
            // A Launch activation happens when the user launches your app via the tile
            // or invokes a toast notification by clicking or tapping on the body.
            if (args.detail.arguments) {
                // TODO: If the app supports toasts, use this value from the toast payload to determine where in the app
                // to take the user in response to them invoking a toast notification.
            }
            else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
                // TODO: This application had been suspended and was then terminated to reclaim memory.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
                // Note: You may want to record the time when the app was last suspended and only restore state if they've returned after a short period.
            }
        }

        if (!args.detail.prelaunchActivated) {
            // TODO: If prelaunchActivated were true, it would mean the app was prelaunched in the background as an optimization.
            // In that case it would be suspended shortly thereafter.
            // Any long-running operations (like expensive network or disk I/O) or changes to user state which occur at launch
            // should be done here (to avoid doing them in the prelaunch case).
            // Alternatively, this work can be done in a resume or visibilitychanged handler.
        }

        if (isFirstActivation) {
            // TODO: The app was activated and had not been running. Do general startup initialization here.
            document.addEventListener("visibilitychange", onVisibilityChanged);
            args.setPromise(WinJS.UI.processAll());
            ApplicationView.preferredLaunchWindowingMode = ApplicationViewWindowingMode.fullScreen;
        }

        isFirstActivation = false;
    };

    function onVisibilityChanged(args) {
        if (!document.hidden) {
            // TODO: The app just became visible. This may be a good time to refresh the view.
        }
    }

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };
    var UI, uTime, skyeLvl, skyeChat, uData, myBlocks, title, images, ls, cBool, atoms, tBool, progMark, cellType;

    progMark = 0;
    tBool = 0; // game timer status
    atoms = ""; // atom strand
    cBool = 0;
    ls = 1; //length of myBlocks saved

    myBlocks = {
        bNum: 0,
        DNA: "C",
        top: 0,
        left: 0,
        bg: "black"
    }// game board peices.

    uData = {
        lvl: 0,
        mod: 0
    };  //used to track user level

    uTime = "4000330000"; // the time is measured during BCE

    skyeLvl = 1; // AI steps
    skyeChat = {
        0: "",
        1: "First things first, we have to get set up...",
        2: "Select a location to place your carbon",
        3: "Well Done! You are on your way to making organic compounds!",
        4: "For now, you are just a small peice of carbon floating in a vast primordial soup! <br /> New tool unlocked! <strong>Sol Button</strong>",
        5: "Pushing the <strong>Sol button</strong> will cycle the time. Try it!",
        6: "Once your carbon has collected enough debris, plot a new carbon point.<br />New tool unlocked: <strong>Change Plot</strong>",
        7: "Keep collecting and making clusters, you might just make life!",
        8: "Now that you are familiar with some controls, you are now able to idle time!<br /> New tool unlocked: <strong>Idle Time</strong>"
    };  // AI chat stuff

    title = {
        0: "Pre Abiogenesis Phase",
        1: "Abiogenesis Phase I",
        2: "Abiogenesis Phase II",
        3: "Abiogenesis Phase III",
        4: "Abiogenesis Phase IV",
        5: "Abiogenesis Phase V",
        6: "Pre Metobolic Phase",
        7: "Metobolic Phase I",
        8: "Metobolic Phase II",
        9: "Metobolic Phase III",
        10: "Metobolic Phase IV",
        11: "Metobolic Phase V",
        12: "Pre-Life Phase",
        13: "Life Phase I",
        14: "Life Phase  II",
        15: "Life Phase  III",
        16: "Life Phase  IV",
        17: "Life Phase  V",
        18: "Pre Complex Life Phase",
        19: "Complex Life Phase"
    }; // game phases
    cellType = {
        0: "Carbon Gook",
        1: "Carbon Glob",
        2: "Carbon Crysalis",
        3: "Carbon Factory",
        4: "Manufactory",
        5: "Autofactory",
        6: "Organic Gook",
        7: "Organic Glob",
        8: "Organic Crysalis",
        9: "Organic Factory",
        10: "Organic Manufactory",
        11: "Organic Autofactory",
        12: "Cellular Glob",
        13: "Single Celled Organism",
        14: "Bi-celled Organism",
        15: "Multi-celled Organism",
        16: "Simple Lifeform",
        17: "Complex Lifeform",
        18: "Sentient Lifeform",
        19: "Galactic Lifeform"
    }; // game phases
    images = {
        0: "url(../images/assets/sheet.jpg)",
        1: "url(../images/assets/sheet1.jpg)",
        2: "url(../images/assets/sheet2.jpg)",
        3: "url(../images/assets/sheet3.jpg)",
        4: "url(../images/assets/sheet4.jpg)",
        5: "url(../images/assets/sheet5.jpg)",
        6: "url(../images/assets/sheet6.jpg)",
        7: "url(../images/assets/sheet7.jpg)",
        8: "url(../images/assets/sheet8.jpg)",
        9: "url(../images/assets/sheet9.jpg)",
        10: "url(../images/assets/sheet10.jpg)",
        11: "url(../images/assets/sheet11.jpg)",
        12: "url(../images/assets/sheet12.jpg)",
        13: "url(../images/assets/sheet13.jpg)",
        14: "url(../images/assets/sheet14.jpg)",
        15: "url(../images/assets/sheet15.jpg)",
        16: "url(../images/assets/sheet16.jpg)",
        17: "url(../images/assets/sheet17.jpg)",
        18: "url(../images/assets/sheet18.jpg)",
        19: "url(../images/assets/sheet19.jpg)"
    }; // game images

    var molecules = {
        CO2: 0,
        C2: 0,
        SN2: 0,
        NS2: 0,
        SH2: 0,
        NP2: 0,
        C3: 0,
        O3: 0,
        O2: 0,
        H3: 0,
        P3: 0,
        PP: 0,
        N3: 0,
        S3: 0,
        NO2: 0
    };

    //begin UI object
    UI = {
        //return functions
        bySel: (x) => { return document.querySelector(x) },
        bySelAll: (x) => { return document.querySelectorAll(x) },
        createEle: (x) => { return document.createElement(x) },
        syncChatBox: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            var sk = localStorage.getItem("skyeLvl");
            var uD = localStorage.getItem("uData");

            if (uD) {
                var uuu = JSON.parse(uD);
            }

            return setTimeout(() => {
                if (!chatBtn) {
                    var chatBtn = UI.createEle("div");
                    chatBtn.className = "chatBtn";

                    gameFrame.appendChild(chatBtn);
                }

                chatBox.innerHTML = skyeChat[sk];

                //UI.checkTheThings(gameArena);

                if (+sk === 1) {
                    //console.log(sk + "n");
                    chatBtn.innerHTML = "Start";
                    chatBtn.onclick = UI.tutor1(gameFrame, chatBox, chatBtn, gameArena);
                    setTimeout(() => {
                        chatBtn.className = "chatBtn_full";
                    }, 10);
                }
                if (+sk === 2) {
                    //console.log(sk + "n");
                    chatBtn.innerHTML = "Continue";
                    if (uuu.lvl === 1) {
                        chatBtn.className = "chatBtn";
                        chatBtn.onclick = UI.tutor2(gameFrame, chatBox, chatBtn);
                        setTimeout(() => {

                            chatBtn.className = "chatBtn";
                        }, 10);
                    } else {
                        setTimeout(() => {
                            chatBtn.className = "chatBtn_sleep";
                            document.body.style.cursor = 'crosshair';
                            gameArena.onclick = UI.addCell(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        }, 10);

                    }
                }
                if (+sk === 3) {
                    chatBtn.innerHTML = "Continue";
                    setTimeout(() => {
                        chatBtn.className = "chatBtn_full";


                        chatBtn.onclick = UI.tutor3(gameFrame, chatBox, chatBtn, gameArena, cells, mmb);
                    }, 10);
                }
                if (+sk === 4) {
                    chatBtn.innerHTML = "Continue";
                    setTimeout(() => {
                        chatBtn.className = "chatBtn_full";
                        chatBtn.onclick = UI.tutor4(gameFrame, chatBox, chatBtn, gameArena, cells, mmb);
                    }, 10);
                }
                if (+sk >= 4) {
                    var turnBtn = UI.bySel(".turnBtn") || UI.bySel(".turnBtn_lit");
                    setTimeout(() => {
                        if (turnBtn) {
                            turnBtn.className = "turnBtn_lit";

                            turnBtn.disabled = false;

                            setTimeout(() => {

                                turnBtn.className = "turnBtn";
                                turnBtn.onclick = UI.cycle(turnBtn, clock);
                            }, 1010);
                            //console.log(turnBtn);
                        }
                    }, 60);
                }
                if (+sk === 5) {
                    chatBtn.innerHTML = "Continue";
                    if (uuu.lvl === 1) {
                        chatBtn.className = "chatBtn";
                        chatBtn.onclick = UI.tutor2(gameFrame, chatBox, chatBtn);
                        setTimeout(() => {
                            chatBtn.className = "chatBtn";
                        }, 10);
                    } else {
                        setTimeout(() => {
                            chatBtn.className = "chatBtn_full";

                            chatBtn.onclick = UI.tutor5(gameFrame, chatBox, chatBtn, gameArena, cells, mmb);
                            //gameArena.onclick = UI.changeHomeCell(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        }, 10);
                    }
                }

                if (+sk >= 6) {

                    setTimeout(() => {
                        //var changeHomeCellBtn = UI.bySel(".changeHomeCellBtn");
                        var x = gameFrame.childNodes;
                        for (var j = 0; j < x.length; j++) {
                            if (x[j].className === "changeHomeCellBtn") {

                                return x[j].className = "changeHomeCellBtn_full";


                            }

                        }
                    }, 60);
                }
                if (+sk === 7) {
                    chatBtn.innerHTML = "Continue";
                    setTimeout(() => {

                        chatBtn.className = "chatBtn_full";
                        chatBtn.onclick = UI.tutor6(gameFrame, chatBox, chatBtn);

                    }, 10);
                }
                if (+sk >= 8) {
                    setTimeout(() => {
                        //var changeHomeCellBtn = UI.bySel(".changeHomeCellBtn");
                        var x = gameFrame.childNodes;
                        for (var j = 0; j < x.length; j++) {
                            if (x[j].className === "timeBtn") {

                                return x[j].className = "timeBtn_full";


                            }

                        }

                    }, 60);
                }
            }, 710);
        },
        changeHomeCell: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb, changeHomeCellBtn) => {

            var sk = localStorage.getItem("skyeLvl"),
                mB = localStorage.getItem("myBlocks_1"),
                oldCell = UI.bySel(".cell");
            //console.log(gameArena);
            if (mB) {
                var mmm = JSON.parse(mB);

                return () => {
                    var cell = UI.createEle("div"),
                        posX = event.clientX,
                        posY = event.clientY;

                    var skk = localStorage.getItem("skyeLvl");
                    //console.log(skk);
                    if (+skk >= 6) {
                        if (oldCell) {
                            oldCell.remove();
                        }
                        document.body.style.cursor = "initial";
                        cell.className = "cell";
                        cell.innerHTML = "&nbsp;";
                        cell.style.left = posX + "px";
                        cell.style.top = posY + "px";
                        cell.style.backgroundColor = "black";
                        gameArena.appendChild(cell);
                        gameArena.onclick = null;

                        mmm.bNum = 1;
                        mmm.left = posX;
                        mmm.top = posY;
                        mmm.bg = "black";
                        if (+skk === 6) {
                            localStorage.setItem("skyeLvl", 7);
                        }
                        //localStorage.setItem("skyeLvl", 7);
                        localStorage.setItem("myBlocks_1", JSON.stringify(mmm));
                        chatBox.innerHTML = "";
                        chatBox.className = "chatBox";

                        setTimeout(() => {
                            chatBox.className = "chatBox_full";

                            UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        }, 600);

                        document.body.style.cursor = "initial";
                        if (!changeHomeCellBtn) {
                            var changeHomeCellBtn = UI.bySel(".changeHomeCellBtn") || UI.bySel(".changeHomeCellBtn_full");
                            changeHomeCellBtn.className = "changeHomeCellBtn_full";

                        } else {
                            changeHomeCellBtn.className = "changeHomeCellBtn_full";

                        }
                    }
                }
            }
        },
        //intitializing and localStorage sync
        init: () => {
            var uT = localStorage.getItem("uTime");
            if (!uT || uT === null) {
                localStorage.setItem("uTime", uTime);
            }
            var sk = localStorage.getItem("skyeLvl");
            if (!sk || sk === null) {
                localStorage.setItem("skyeLvl", skyeLvl);
            }
            var uD = localStorage.getItem("uData");
            if (!uD || uD === null) {
                localStorage.setItem("uData", JSON.stringify(uData));
            }
            var mB = localStorage.getItem("myBlocks_1");
            if (!mB || mB === null) {
                localStorage.setItem("myBlocks_1", JSON.stringify(myBlocks));
            }
            var ls = localStorage.getItem("ls");
            if (!ls || ls === null) {
                localStorage.setItem("ls", 1);
            }
            var cBool = localStorage.getItem("cBool");
            if (!cBool) {
                localStorage.setItem("cBool", 0);
            }

            var atoms = localStorage.getItem("atoms");
            if (!atoms) {
                localStorage.setItem("atoms", "");
            }

            var tBool = localStorage.getItem("tBool");
            if (!tBool) {
                localStorage.setItem("tBool", 0);
            }

            var progMark = localStorage.getItem("progMark");
            if (!progMark) {
                localStorage.setItem("progMark", 0);
            }

            var mlcs = localStorage.getItem("molecules");
            if (!mlcs) {
                localStorage.setItem("molecules", JSON.stringify(molecules));
            }

            UI.myLoad();
        },
        //loading and UI stuffs
        addCell: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, e, cells, mmb) => {
            var sk = localStorage.getItem("skyeLvl"),
                mB = localStorage.getItem("myBlocks_1");

            if (mB) {
                var mmm = JSON.parse(mB);
            }
            return () => {
                var cell = UI.createEle("div"),
                    posX = event.clientX,
                    posY = event.clientY;

                var skk = localStorage.getItem("skyeLvl");

                if (+skk === 2) {

                    cell.className = "cell";
                    cell.innerHTML = "&nbsp;";
                    cell.style.left = posX + "px";
                    cell.style.top = posY + "px";
                    cell.style.backgroundColor = "black";
                    gameArena.appendChild(cell);

                    mmm.bNum = 1;
                    mmm.left = posX;
                    mmm.top = posY;
                    mmm.bg = "black";

                    localStorage.setItem("skyeLvl", 3);
                    localStorage.setItem("myBlocks_1", JSON.stringify(mmm));
                    chatBox.innerHTML = "";
                    chatBox.className = "chatBox";

                    setTimeout(() => {
                        chatBox.className = "chatBox_full";
                        document.body.style.cursor = 'initial';
                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                    }, 600);
                    setTimeout(() => {
                        //console.log(mmm.left = posX;);
                    }, 1000);
                }
            }
        },
        myLoad: () => {
            var startBtn = UI.createEle("button"),
                settBtn = UI.createEle("button");
            //console.log(localStorage);
            var uT = localStorage.getItem("uTime");

            if (+uT === 4000330000) {
                startBtn.innerHTML = "Start";
            } else {
                startBtn.innerHTML = "Continue";
            }

            startBtn.onclick = UI.loadGame(startBtn, settBtn);
            startBtn.className = "startBtn";

            settBtn.innerHTML = "Settings";
            settBtn.onclick = UI.settPage(startBtn, settBtn);
            settBtn.className = "settBtn";

            dvContain.appendChild(startBtn);
            dvContain.appendChild(settBtn);

            setTimeout(() => {
                startBtn.className = "startBtn_full";
                settBtn.className = "settBtn_full";
            }, 600);
        },
        settPage: (startBtn, settBtn) => {
            return () => {
                startBtn.className = "startBtn_pull";
                settBtn.className = "settBtn_pull";
                setTimeout(() => {
                    startBtn.remove();
                    settBtn.remove();
                    UI.rollSettings();
                }, 600);
            }
        },
        rollSettings: () => {
            var clearBtn = UI.createEle("button"),
                backBtn = UI.createEle("button");

            clearBtn.innerHTML = "Clear Local Storage";
            clearBtn.onclick = UI.clearAll(clearBtn, backBtn);
            clearBtn.className = "clearBtn";

            backBtn.innerHTML = "Back";
            backBtn.onclick = UI.backFunc(clearBtn, backBtn);
            backBtn.className = "backBtn";

            dvContain.appendChild(clearBtn);
            dvContain.appendChild(backBtn);
            //console.log(dvContain);

            setTimeout(() => {
                clearBtn.className = "clearBtn_full";
                backBtn.className = "backBtn_full";
            }, 600);
        },
        loadGame: (startBtn, settBtn) => {
            return () => {
                startBtn.className = "startBtn_pull";
                settBtn.className = "settBtn_pull";
                setTimeout(() => {
                    startBtn.remove();
                    settBtn.remove();
                    UI.rollGame();
                }, 600);
            }
        },
        rollGame: () => {
            var gameFrame = UI.createEle("div");

            gameFrame.innerHTML = "&nbsp;";
            gameFrame.className = "gameFrame";

            dvContain.appendChild(gameFrame);

            setTimeout(() => {
                gameFrame.className = "gameFrame_full";
                UI.beginGameState(gameFrame);
            }, 600);
        },
        beginGameState: (gameFrame) => {
            var uD = localStorage.getItem("uData");

            if (uD) {
                var uuu = JSON.parse(uD);
            }

            var turnBtn = UI.createEle("button"),
                header = UI.createEle("h1"),
                slot = UI.createEle("div"),
                clock = UI.createEle("input"),
                menu = UI.createEle("div"),
                skye = UI.createEle("div"),
                chatBox = UI.createEle('div'),
                gameArena = UI.createEle("div"),
                changeHomeCellBtn = UI.createEle("div"),
                timeBtn = UI.createEle("div"),
                chatBtn = UI.createEle("div"),
                progressBar = UI.createEle("div"),
                progMark = localStorage.getItem("progMark");

            if (progMark <= 100) {
                progressBar.className = "progressBar";
                progressBar.style.width = progMark + "%";
                progressBar.innerHTML = "&nbsp;";
            }

            chatBtn.className = "chatBtn";
            chatBtn.innerHTML = "&nbsp;";

            var uT = localStorage.getItem("uTime"),
                sk = localStorage.getItem("skyeLvl");

            timeBtn.className = "timeBtn";
            timeBtn.innerHTML = "▶";
            timeBtn.onclick = UI.timerToggle(turnBtn, clock, timeBtn);

            changeHomeCellBtn.innerHTML = "💠";
            changeHomeCellBtn.className = "changeHomeCellBtn";
            changeHomeCellBtn.onclick = UI.homeCellCreate(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb, changeHomeCellBtn);

            gameArena.className = "gameArena";
            var mB = localStorage.getItem("myBlocks_1");
            var ls = localStorage.getItem("ls");
            if (mB) {
                var b = JSON.parse(mB);

                if (b.bNum === 0) { } else {
                    for (var k = 0; k < +ls; k++) {
                        var mBs = localStorage.getItem("myBlocks_" + (+k + +1));

                        if (mBs != null) {
                            if (mBs) {
                                var mmb = JSON.parse(mBs);
                                var cells = UI.createEle("div");

                                cells.className = "cells";
                                cells.innerHTML = "&nbsp;";
                                cells.style.left = mmb.left + "px";
                                cells.style.top = mmb.top + "px";
                                cells.style.transition = "all 400ms";
                                cells.onmouseover = UI.hoverCell(cells);
                                cells.onmouseout = UI.outHoverCell(cells);
                                cells.onclick = UI.cellSelected(cells);
                                cells.style.backgroundColor = mmb.bg;
                            }
                            gameArena.appendChild(cells);
                            setTimeout(() => {
                                UI.setCells();
                            }, 300);
                        }
                    }
                }
            }
            turnBtn.innerHTML = "🌞";
            turnBtn.className = "turnBtn";
            turnBtn.style.backgroundImage = images[uuu.lvl];

            if (+sk < 4) {
                turnBtn.disabled = true;
            } else {
                turnBtn.onclick = UI.cycle(turnBtn, clock);
            }

            header.innerHTML = title[uuu.lvl] + "&nbsp;" + +progMark + "/100";
            header.style.backgroundImage = images[uuu.lvl];
            header.appendChild(progressBar);
            header.className = "header";

            slot.innerHTML = "🔬";
            slot.style.backgroundImage = images[uuu.lvl];
            slot.onclick = UI.marketPage(gameFrame);
            slot.className = "slot";

            clock.style.backgroundImage = images[uuu.lvl];
            clock.value = uT + " BCE";
            clock.className = "clock";
            clock.readOnly = true;

            menu.innerHTML = "Menu";
            menu.style.backgroundImage = images[uuu.lvl];
            menu.onclick = UI.userMenu(menu, gameFrame);
            menu.className = "menuTab";

            skye.className = "skye";
            skye.innerHTML = "&nbsp;";

            //chatBox.value = skyeChat[sk];
            UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
            chatBox.className = "chatBox";

            gameFrame.appendChild(gameArena);
            gameFrame.appendChild(changeHomeCellBtn);
            gameFrame.appendChild(timeBtn);
            gameFrame.appendChild(turnBtn);
            gameFrame.appendChild(header);
            gameFrame.appendChild(slot);
            gameFrame.appendChild(clock);
            gameFrame.appendChild(menu);
            gameFrame.appendChild(skye);
            gameFrame.appendChild(chatBox);
            gameFrame.appendChild(chatBtn);

            setTimeout(() => {
                chatBox.className = "chatBox_full";
                if (+sk >= 6) {
                    changeHomeCellBtn.className = "changeHomeCellBtn_full";
                    var bb = UI.bySelAll(".cells");
                    if (bb[0]) {
                        bb[0].className = "cell";
                    }

                }
            }, 400);
        },
        saveCellState: (cells) => {
            for (var c = 1; c < cells.length; c++) {
                var mst = cells[c].style.left, msl = cells[c].style.top;

                var x = mst.length, y = msl.length, ms, ml;

                if (+x === +6) {
                    ms = mst.slice(0, 4);
                }
                if (+x === +5) {
                    ms = mst.slice(0, 3);
                }
                if (+x === +4) {
                    ms = mst.slice(0, 2);
                }
                if (+x === +3) {
                    ms = mst.slice(0, 1);
                }
                if (+y === +6) {
                    ml = msl.slice(0, 4);
                }
                if (+y === +5) {
                    ml = msl.slice(0, 3);
                }
                if (+y === +4) {
                    ml = msl.slice(0, 2);
                }
                if (+y === +3) {
                    ml = msl.slice(0, 1);
                }

                myBlocks.bNum = c;
                myBlocks.DNA = cells[c].id;
                myBlocks.left = +ms;
                myBlocks.top = +ml;
                myBlocks.bg = cells[c].style.backgroundColor;
                localStorage.setItem("myBlocks_" + +c, JSON.stringify(myBlocks));
                localStorage.setItem("ls", +cells.length);
            }
        },
        addPoint: () => {
            var progBar = UI.bySel(".progressBar"),
                progMark = localStorage.getItem("progMark"),
                uD = localStorage.getItem("uData");
            if (uD) {
                var uuu = JSON.parse(uD);
            }
            if (progBar && progMark <= 99) {
                localStorage.setItem("progMark", +progMark + +1);
                var newProMark = localStorage.getItem("progMark");

                progBar.style.width = +newProMark + "%";
                progBar.style.backgroundColor = "rgba(255, 255, 0, 0.19);";
                var pg = progBar.parentNode;
                if (+newProMark === 100) {

                    uuu.lvl = +uuu.lvl + +1;
                    localStorage.setItem("uData", JSON.stringify(uuu));


                    
                    localStorage.setItem("progMark", 1);

                }
            }
            
            var nPm = localStorage.getItem("progMark");
            pg.innerHTML = title[uuu.lvl] + "&nbsp;" + +nPm + "/100";
            var progBar = UI.bySel(".progressBar");
            if (!progBar) {
                var progBar = UI.createEle("div");
                progBar.innerHTML = "&nbsp;";
                progBar.className = "progressBar";
                progBar.style.width = +nPm + "%";

                pg.appendChild(progBar);

            }

            progBar.style.width = +nPm + "%";

            

            var turnBtn = UI.bySel(".turnBtn"),
                header = UI.bySel(".header"),
                slot = UI.bySel(".slot"),
                clock = UI.bySel(".clock"),
                menu = UI.bySel(".menuTab");

            turnBtn.style.backgroundImage = images[uuu.lvl];
            header.style.backgroundImage = images[uuu.lvl];
            slot.style.backgroundImage = images[uuu.lvl];
            clock.style.backgroundImage = images[uuu.lvl];
            menu.style.backgroundImage = images[uuu.lvl];


        },
        no2Collect: (active_cells, icon_full, no2Btn, cells) => {//Nitrogen dioxide 
            return () => {
                var no2Win = UI.createEle("h1");
                no2Win.className = "no2Win";

                no2Win.id = "NO2";
                var x = no2Win.id;
                UI.saveMolecule(x);

                no2Win.innerHTML = "Nitrogen dioxide";

                document.body.appendChild(no2Win);
                setTimeout(() => {
                    no2Win.className = "no2Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                no2Btn.innerHTML = "💥";
                no2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    no2Win.remove();
                    no2Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        s3Collect: (active_cells, icon_full, s3Btn, cells) => {//Trisulfur 
            return () => {
                var s3Win = UI.createEle("h1");
                s3Win.className = "s3Win";

                s3Win.id = "S3";
                var x = s3Win.id;
                UI.saveMolecule(x);

                s3Win.innerHTML = "Trisulfur";

                document.body.appendChild(s3Win);
                setTimeout(() => {
                    s3Win.className = "s3Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                s3Btn.innerHTML = "💥";
                s3Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    s3Win.remove();
                    s3Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        n3Collect: (active_cells, icon_full, n3Btn, cells) => {//Trinitrogen 
            return () => {
                var n3Win = UI.createEle("h1");
                n3Win.className = "n3Win";

                n3Win.id = "N3";
                var x = n3Win.id;
                UI.saveMolecule(x);

                n3Win.innerHTML = "Trinitrogen";

                document.body.appendChild(n3Win);
                setTimeout(() => {
                    n3Win.className = "n3Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                n3Btn.innerHTML = "💥";
                n3Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    n3Win.remove();
                    n3Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        ppCollect: (active_cells, icon_full, ppBtn, cells) => {//Diphosphorus 
            return () => {
                var ppWin = UI.createEle("h1");
                ppWin.className = "ppWin";

                ppWin.id = "PP";
                var x = ppWin.id;
                UI.saveMolecule(x);

                ppWin.innerHTML = "Diphosphorus";

                document.body.appendChild(ppWin);
                setTimeout(() => {
                    ppWin.className = "ppWin_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                ppBtn.innerHTML = "💥";
                ppBtn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[1].remove();
                    active_cells[0].remove();
                    ppWin.remove();
                    ppBtn.remove();

                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        p3Collect: (active_cells, icon_full, p3Btn, cells) => {//Triphosphorus 
            return () => {
                var p3Win = UI.createEle("h1");
                p3Win.className = "p3Win";

                p3Win.id = "P3";
                var x = p3Win.id;
                UI.saveMolecule(x);

                p3Win.innerHTML = "Triphosphorus";

                document.body.appendChild(p3Win);
                setTimeout(() => {
                    p3Win.className = "p3Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                p3Btn.innerHTML = "💥";
                p3Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    p3Win.remove();
                    p3Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        h3Collect: (active_cells, icon_full, h3Btn, cells) => {//Molecular Hydrogen
            return () => {
                var h3Win = UI.createEle("h1");
                h3Win.className = "h3Win";

                h3Win.id = "H3";
                var x = h3Win.id;
                UI.saveMolecule(x);

                h3Win.innerHTML = "Molecular Hydrogen 3";

                document.body.appendChild(h3Win);
                setTimeout(() => {
                    h3Win.className = "h3Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                h3Btn.innerHTML = "💥";
                h3Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    h3Win.remove();
                    h3Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        o2Collect: (active_cells, icon_full, o2Btn, cells) => {//Ozone
            return () => {
                var o2Win = UI.createEle("h1");
                o2Win.className = "o2Win";

                o2Win.id = "O2";
                var x = o2Win.id;
                UI.saveMolecule(x);

                o2Win.innerHTML = "Molecular Oxygen";

                document.body.appendChild(o2Win);
                setTimeout(() => {
                    o2Win.className = "o2Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                o2Btn.innerHTML = "💥";
                o2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {

                    active_cells[1].remove();
                    active_cells[0].remove();
                    o2Win.remove();
                    o2Btn.remove();


                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        o3Collect: (active_cells, icon_full, o3Btn, cells) => {//Ozone
            return () => {
                var o3Win = UI.createEle("h1");
                o3Win.className = "o3Win";

                o3Win.id = "O3";
                var x = o3Win.id;
                UI.saveMolecule(x);

                o3Win.innerHTML = "Ozone";

                document.body.appendChild(o3Win);
                setTimeout(() => {
                    o3Win.className = "o3Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                o3Btn.innerHTML = "💥";
                o3Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    o3Win.remove();
                    o3Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        c3Collect: (active_cells, icon_full, c3Btn, cells) => {//Diphosphorus mononitride
            return () => {
                var c3Win = UI.createEle("h1");
                c3Win.className = "c3Win";

                c3Win.id = "C3";
                var x = c3Win.id;
                UI.saveMolecule(x);

                c3Win.innerHTML = "Tricarbon";

                document.body.appendChild(c3Win);
                setTimeout(() => {
                    c3Win.className = "c3Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                c3Btn.innerHTML = "💥";
                c3Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    c3Win.remove();
                    c3Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        np2Collect: (active_cells, icon_full, np2Btn, cells) => {//Diphosphorus mononitride
            return () => {
                var np2Win = UI.createEle("h1");
                np2Win.className = "np2Win";

                np2Win.id = "NP2";
                var x = np2Win.id;
                UI.saveMolecule(x);

                np2Win.innerHTML = "Diphosphorus Mononitride";

                document.body.appendChild(np2Win);
                setTimeout(() => {
                    np2Win.className = "np2Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                np2Btn.innerHTML = "💥";
                np2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    np2Win.remove();
                    np2Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        sh2Collect: (active_cells, icon_full, sh2Btn, cells) => {//Dihydrogen monosulfide
            return () => {
                var sh2Win = UI.createEle("h1");
                sh2Win.className = "sh2Win";

                sh2Win.id = "SH2";
                var x = sh2Win.id;
                UI.saveMolecule(x);

                sh2Win.innerHTML = "Dihydrogen Monosulfide";

                document.body.appendChild(sh2Win);
                setTimeout(() => {
                    sh2Win.className = "sh2Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                sh2Btn.innerHTML = "💥";
                sh2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    sh2Win.remove();
                    sh2Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        ns2Collect: (active_cells, icon_full, ns2Btn, cells) => {//Disulfur mononitride
            return () => {
                var ns2Win = UI.createEle("h1");
                ns2Win.className = "ns2Win";

                ns2Win.id = "NS2";
                var x = ns2Win.id;
                UI.saveMolecule(x);

                ns2Win.innerHTML = "Disulfur mononitride";

                document.body.appendChild(ns2Win);
                setTimeout(() => {
                    ns2Win.className = "ns2Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                ns2Btn.innerHTML = "💥";
                ns2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    ns2Win.remove();
                    ns2Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }

        },
        sn2Collect: (active_cells, icon_full, sn2Btn, cells) => {//Sulfur dinitride


            return () => {
                var sn2Win = UI.createEle("h1");
                sn2Win.className = "sn2Win";

                sn2Win.id = "SN2";
                var x = sn2Win.id;
                UI.saveMolecule(x);

                sn2Win.innerHTML = "Sulfur Dinitride";

                document.body.appendChild(sn2Win);
                setTimeout(() => {
                    sn2Win.className = "sn2Win_full";
                }, 100);
                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                sn2Btn.innerHTML = "💥";
                sn2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    sn2Win.remove();
                    sn2Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }
        },
        c2Collect: (active_cells, icon_full, c2Btn, cells) => {//Diatomic Carbon
            return () => {
                var c2Win = UI.createEle("h1");
                c2Win.className = "c2Win";

                c2Win.id = "C2";
                var x = c2Win.id;
                UI.saveMolecule(x);

                c2Win.innerHTML = "Diatomic Carbon";

                document.body.appendChild(c2Win);



                setTimeout(() => {
                    c2Win.className = "c2Win_full";
                }, 100);

                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                c2Btn.innerHTML = "💥";
                c2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {

                    active_cells[1].remove();
                    active_cells[0].remove();
                    c2Win.remove();
                    c2Btn.remove();

                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }
        },
        co2Collect: (active_cells, icon_full, co2Btn, cells) => {//Carbon dioxide
            return () => {
                var co2Win = UI.createEle("h1");
                co2Win.className = "co2Win";

                co2Win.id = "CO2";
                var x = co2Win.id;
                UI.saveMolecule(x);

                co2Win.innerHTML = "Carbon Dioxide";

                document.body.appendChild(co2Win);



                setTimeout(() => {
                    co2Win.className = "co2Win_full";
                }, 100);

                for (var i = 0; i < active_cells.length; i++) {
                    active_cells[i].className = "cells_collide";
                }

                co2Btn.innerHTML = "💥";
                co2Btn.onclick = null;
                UI.addPoint();
                UI.saveCellState(cells);

                setTimeout(() => {
                    active_cells[2].remove();
                    active_cells[1].remove();
                    active_cells[0].remove();
                    co2Win.remove();
                    co2Btn.remove();

                    icon_full[2].remove();
                    icon_full[1].remove();
                    icon_full[0].remove();
                }, 1000);
            }
        },
        saveMolecule: (x) => {
            var mlcs = localStorage.getItem("molecules");

            if (mlcs) {
                var mcc = JSON.parse(mlcs);
            }

            mcc[x] = +mcc[x] + +1;
            localStorage.setItem("molecules", JSON.stringify(mcc));
        },
        runCellChecker: () => {
            localStorage.setItem("atoms", "");

            var icon_full = UI.bySelAll(".icon_full");
            var active_cells = UI.bySelAll(".cells_selected");
            var cells = UI.bySelAll(".cells");

            for (var i = 0; i < icon_full.length; i++) {
                var stuffs = icon_full[i].innerHTML;
                var atoms = localStorage.getItem("atoms");
                localStorage.setItem("atoms", atoms + stuffs);
            };

            var x = localStorage.getItem("atoms");

            if (x === "OCO" || x === "COO" || x === "OOC") {//Carbon dioxide
                var co2Btn = UI.createEle("button");

                co2Btn.className = "Co2Btn";
                co2Btn.innerHTML = "💢";

                document.body.appendChild(co2Btn);

                setTimeout(() => {
                    co2Btn.className = "Co2Btn_full";
                    co2Btn.onclick = UI.co2Collect(active_cells, icon_full, co2Btn, cells);
                }, 80);
                //UI.co2Collect(active_cells, icon_full);
            } else {
                var co2Btn_full = UI.bySel(".Co2Btn_full") || UI.bySel(".Co2Btn");

                if (!co2Btn_full || co2Btn_full === null) { } else {
                    co2Btn_full.remove();
                }

            }
            if (x === "CC") {//Carbon dioxide
                var c2Btn = UI.createEle("button");

                c2Btn.className = "C2Btn";
                c2Btn.innerHTML = "💢";

                document.body.appendChild(c2Btn);

                setTimeout(() => {
                    c2Btn.className = "C2Btn_full";
                    c2Btn.onclick = UI.c2Collect(active_cells, icon_full, c2Btn, cells);
                }, 80);

            } else {
                var c2Btn_full = UI.bySel(".C2Btn_full") || UI.bySel(".C2Btn");

                if (!c2Btn_full || c2Btn_full === null) { } else {
                    c2Btn_full.remove();
                }

            }
            if (x === "NSN" || x === "SNN" || x === "NNS") {//Sulfur dinitride
                var sn2Btn = UI.createEle("button");

                sn2Btn.className = "sn2Btn";
                sn2Btn.innerHTML = "💢";

                document.body.appendChild(sn2Btn);

                setTimeout(() => {
                    sn2Btn.className = "sn2Btn_full";
                    sn2Btn.onclick = UI.sn2Collect(active_cells, icon_full, sn2Btn, cells);
                }, 80);

            } else {
                var sn2Btn_full = UI.bySel(".sn2Btn_full") || UI.bySel(".sn2Btn");

                if (!sn2Btn_full || sn2Btn_full === null) { } else {
                    sn2Btn_full.remove();
                }

            }
            if (x === "NSS" || x === "SNS" || x === "SSN") {//Disulfur mononitride
                var ns2Btn = UI.createEle("button");

                ns2Btn.className = "ns2Btn";
                ns2Btn.innerHTML = "💢";

                document.body.appendChild(ns2Btn);

                setTimeout(() => {
                    ns2Btn.className = "ns2Btn_full";
                    ns2Btn.onclick = UI.ns2Collect(active_cells, icon_full, ns2Btn, cells);
                }, 80);

            } else {
                var ns2Btn_full = UI.bySel(".ns2Btn_full") || UI.bySel(".ns2Btn");

                if (!ns2Btn_full || ns2Btn_full === null) { } else {
                    ns2Btn_full.remove();
                }

            }
            if (x === "SHH" || x === "HSH" || x === "HHS") {//Dihydrogen monosulfide
                var sh2Btn = UI.createEle("button");

                sh2Btn.className = "sh2Btn";
                sh2Btn.innerHTML = "💢";

                document.body.appendChild(sh2Btn);

                setTimeout(() => {
                    sh2Btn.className = "sh2Btn_full";
                    sh2Btn.onclick = UI.ns2Collect(active_cells, icon_full, sh2Btn, cells);
                }, 80);

            } else {
                var sh2Btn_full = UI.bySel(".sh2Btn_full") || UI.bySel(".sh2Btn");

                if (!sh2Btn_full || sh2Btn_full === null) { } else {
                    sh2Btn_full.remove();
                }

            }

            if (x === "NPP" || x === "PNP" || x === "PPN") {//Diphosphorus mononitride
                var np2Btn = UI.createEle("button");

                np2Btn.className = "sh2Btn";
                np2Btn.innerHTML = "💢";

                document.body.appendChild(np2Btn);

                setTimeout(() => {
                    np2Btn.className = "sh2Btn_full";
                    np2Btn.onclick = UI.np2Collect(active_cells, icon_full, np2Btn, cells);
                }, 80);

            } else {
                var np2Btn_full = UI.bySel(".np2Btn_full") || UI.bySel(".np2Btn");

                if (!np2Btn_full || np2Btn_full === null) { } else {
                    np2Btn_full.remove();
                }

            }
            if (x === "CCC") {//Tricarbon
                var c3Btn = UI.createEle("button");

                c3Btn.className = "c3Btn";
                c3Btn.innerHTML = "💢";

                document.body.appendChild(c3Btn);

                setTimeout(() => {
                    c3Btn.className = "c3Btn_full";
                    c3Btn.onclick = UI.c3Collect(active_cells, icon_full, c3Btn, cells);
                }, 80);

            } else {
                var c3Btn_full = UI.bySel(".c3Btn_full") || UI.bySel(".c3Btn");

                if (!c3Btn_full || c3Btn_full === null) { } else {
                    c3Btn_full.remove();
                }

            }
            if (x === "OO") {//Molecular Oxygen
                var o2Btn = UI.createEle("button");

                o2Btn.className = "o2Btn";
                o2Btn.innerHTML = "💢";

                document.body.appendChild(o2Btn);

                setTimeout(() => {
                    o2Btn.className = "o2Btn_full";
                    o2Btn.onclick = UI.o2Collect(active_cells, icon_full, o2Btn, cells);
                }, 80);
            } else {
                var o2Btn_full = UI.bySel(".o2Btn_full") || UI.bySel(".o2Btn");

                if (!o2Btn_full || o2Btn_full === null) { } else {
                    o2Btn_full.remove();
                }
            }
            if (x === "OOO") {//Ozone
                var o3Btn = UI.createEle("button");

                o3Btn.className = "o3Btn";
                o3Btn.innerHTML = "💢";

                document.body.appendChild(o3Btn);

                setTimeout(() => {
                    o3Btn.className = "o3Btn_full";
                    o3Btn.onclick = UI.o3Collect(active_cells, icon_full, o3Btn, cells);
                }, 80);

            } else {
                var o3Btn_full = UI.bySel(".o3Btn_full") || UI.bySel(".o3Btn");

                if (!o3Btn_full || o3Btn_full === null) { } else {
                    o3Btn_full.remove();
                }

            }
            if (x === "HHH") {//Molecular Hydrogen
                var h3Btn = UI.createEle("button");

                h3Btn.className = "h3Btn";
                h3Btn.innerHTML = "💢";

                document.body.appendChild(h3Btn);

                setTimeout(() => {
                    h3Btn.className = "h3Btn_full";
                    h3Btn.onclick = UI.h3Collect(active_cells, icon_full, h3Btn, cells);
                }, 80);

            } else {
                var h3Btn_full = UI.bySel(".h3Btn_full") || UI.bySel(".h3Btn");

                if (!h3Btn_full || h3Btn_full === null) { } else {
                    h3Btn_full.remove();
                }
            }
            if (x === "PPP") {//Triphosphorus
                var p3Btn = UI.createEle("button");

                p3Btn.className = "p3Btn";
                p3Btn.innerHTML = "💢";

                document.body.appendChild(p3Btn);

                setTimeout(() => {
                    p3Btn.className = "p3Btn_full";
                    p3Btn.onclick = UI.p3Collect(active_cells, icon_full, p3Btn, cells);
                }, 80);

            } else {
                var p3Btn_full = UI.bySel(".p3Btn_full") || UI.bySel(".p3Btn");

                if (!p3Btn_full || p3Btn_full === null) { } else {
                    p3Btn_full.remove();
                }
            }
            if (x === "NNN") {//Trinitrogen
                var n3Btn = UI.createEle("button");

                n3Btn.className = "n3Btn";
                n3Btn.innerHTML = "💢";

                document.body.appendChild(n3Btn);

                setTimeout(() => {
                    n3Btn.className = "n3Btn_full";
                    n3Btn.onclick = UI.n3Collect(active_cells, icon_full, n3Btn, cells);
                }, 80);

            } else {
                var n3Btn_full = UI.bySel(".n3Btn_full") || UI.bySel(".n3Btn");

                if (!n3Btn_full || n3Btn_full === null) { } else {
                    n3Btn_full.remove();
                }
            }
            if (x === "SSS") {//Trisulfur
                var s3Btn = UI.createEle("button");

                s3Btn.className = "s3Btn";
                s3Btn.innerHTML = "💢";

                document.body.appendChild(s3Btn);

                setTimeout(() => {
                    s3Btn.className = "s3Btn_full";
                    s3Btn.onclick = UI.n3Collect(active_cells, icon_full, s3Btn, cells);
                }, 80);

            } else {
                var s3Btn_full = UI.bySel(".s3Btn_full") || UI.bySel(".s3Btn");

                if (!s3Btn_full || s3Btn_full === null) { } else {
                    s3Btn_full.remove();
                }
            }
            if (x === "NOO" || x === "ONO" || x === "OON") {//Nitrogen dioxide
                var no2Btn = UI.createEle("button");

                no2Btn.className = "no2Btn";
                no2Btn.innerHTML = "💢";

                document.body.appendChild(no2Btn);

                setTimeout(() => {
                    no2Btn.className = "no2Btn_full";
                    no2Btn.onclick = UI.no2Collect(active_cells, icon_full, no2Btn, cells);
                }, 80);

            } else {
                var no2Btn_full = UI.bySel(".no2Btn_full") || UI.bySel(".no2Btn");

                if (!no2Btn_full || no2Btn_full === null) { } else {
                    no2Btn_full.remove();
                }
            }
            if (x === "PP" || x === "PP" || x === "PP") {//Diphosphorus
                var ppBtn = UI.createEle("button");

                ppBtn.className = "ppBtn";
                ppBtn.innerHTML = "💢";

                document.body.appendChild(ppBtn);

                setTimeout(() => {
                    ppBtn.className = "ppBtn_full";
                    ppBtn.onclick = UI.ppCollect(active_cells, icon_full, ppBtn, cells);
                }, 80);

            } else {
                var ppBtn_full = UI.bySel(".ppBtn_full") || UI.bySel(".ppBtn");

                if (!ppBtn_full || ppBtn_full === null) { } else {
                    ppBtn_full.remove();
                }
            }
        },
        generateCellIcon: (cells) => {

            var icon = UI.createEle("div");

            icon.className = "icon";
            icon.style.backgroundColor = cells.style.backgroundColor;
            icon.innerHTML = cells.id;

            document.body.appendChild(icon);

            setTimeout(() => {
                icon.className = "icon_full";
                UI.runCellChecker();
            }, 40);
        },
        takeAwayCellIcon: (cells) => {
            var icons = UI.bySelAll(".icon_full") || UI.bySelAll(".icon");

            for (var i = 0; i < icons.length; i++) {
                if (icons[i].innerHTML === cells.id) {
                    return UI.iconRemover(icons, i);
                }
            }
        },
        iconRemover: (icons, i) => {
            icons[i].className = "icon";

            setTimeout(() => {
                icons[i].remove();
                UI.runCellChecker();
            }, 200);

        },
        cellSelected: (cells, matter) => {
            return () => {

                if (cells.className === "cells_selected") {
                    cells.className = "cells";

                    UI.takeAwayCellIcon(cells);
                } else {
                    cells.className = "cells_selected";

                    UI.generateCellIcon(cells);
                }
            }
        },
        outHoverCell: (cells, matter) => {
            return () => {
                if (cells) {
                    if (cells.className === "cells_selected") { return false; } else {
                        cells.style.padding = "0 0";
                        cells.style.borderRadius = "7px";
                    }
                } else {
                    if (matter.className === "cells_selected") { return false; } else {
                        matter.style.padding = "0 0";
                        matter.style.borderRadius = "7px";
                    }
                }
            }
        },
        hoverCell: (cells, matter) => {
            return () => {
                if (cells) {
                    cells.style.padding = "10px 10px";
                    cells.style.borderRadius = "20px";

                } else {
                    matter.style.padding = "10px 10px";
                    matter.style.borderRadius = "20px";
                }
            }
        },
        closeMarket: (market, table, tableStatus) => {
            return () => {
                market.className = "market";
                table.className = "table";
                tableStatus.className = "tableStatus";
                setTimeout(() => {
                    market.remove();
                }, 1005);
            }
        },
        marketPage: (gameFrame) => {
            return () => {
                var mk = UI.bySel(".market") || UI.bySel(".market_full"),
                    mlcs = localStorage.getItem("molecules"),
                    uD = localStorage.getItem("uData");
                if (mlcs) {
                    var mcc = JSON.parse(mlcs);
                }
                if (uD) {
                    var uuu = JSON.parse(uD);
                }
                if (mk) { } else {
                    var market = UI.createEle("div"),
                        closeBtn = UI.createEle("button"),
                        table = UI.createEle("div"),
                        tableC = UI.createEle("div"),
                        tableO = UI.createEle("div"),
                        tableN = UI.createEle("div"),
                        tableH = UI.createEle("div"),
                        tableP = UI.createEle("div"),
                        tableS = UI.createEle("div"),
                        CO2 = UI.createEle("div"),
                        C2 = UI.createEle("div"),
                        SN2 = UI.createEle("div"),
                        NS2 = UI.createEle("div"),
                        SH2 = UI.createEle("div"),
                        NP2 = UI.createEle("div"),
                        C3 = UI.createEle("div"),
                        O3 = UI.createEle("div"),
                        O2 = UI.createEle("div"),
                        H3 = UI.createEle("div"),
                        P3 = UI.createEle("div"),
                        PP = UI.createEle("div"),
                        N3 = UI.createEle("div"),
                        S3 = UI.createEle("div"),
                        NO2 = UI.createEle("div"),
                        tableStatus = UI.createEle("div"),
                        tableStatusData = UI.createEle("div"),
                        happiness = UI.createEle("div"),
                        health = UI.createEle("div"),
                        current = UI.createEle("div"),
                        needsTable = UI.createEle("div"),
                        wantsTable = UI.createEle("div"),
                        wants = UI.createEle("div"),
                        needs = UI.createEle("div");


                    ////table stuffs
                    NO2.innerHTML = "<span>Nitrogen Dioxide<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>NO<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.NO2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    S3.innerHTML = "<span>Trisulfur<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>S<sub>3</sub><sup>&nbsp;</sup></span><span>" + mcc.S3 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    N3.innerHTML = "<span>Trinitrogen<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>N<sub>3</sub><sup>&nbsp;</sup></span><span>" + mcc.N3 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    PP.innerHTML = "<span>Diphosphorus<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>P<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.PP + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    P3.innerHTML = "<span>Triphosphorus<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>P<sub>3</sub><sup>&nbsp;</sup></span><span>" + mcc.P3 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    H3.innerHTML = "<span>Molecular Hydrogen<sub>&nbsp;</sub><sup>III</sup></span>" + "<span>H<sub>3</sub><sup>&nbsp;</sup></span><span>" + mcc.H3 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    O3.innerHTML = "<span>Ozone<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>O<sub>3</sub><sup>&nbsp;</sup></span><span>" + mcc.O3 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    O2.innerHTML = "<span>Molecular Oxygen<sub>&nbsp;</sub><sup>II</sup></span>" + "<span>O<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.O2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    NP2.innerHTML = "<span>Diphosphorus Mononitride<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>NP<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.NP2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    SH2.innerHTML = "<span>Dihydrogen Monosulfide<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>HS<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.SH2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    NS2.innerHTML = "<span>Disulfur Mononitride<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>NS<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.NS2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    SN2.innerHTML = "<span>Sulfur Dinitride<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>SN<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.SN2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    C3.innerHTML = "<span>Tricarbon<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>C<sub>3</sub><sup>&nbsp;</sup></span><span>" + mcc.C3 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    C2.innerHTML = "<span>Diatomic Carbon<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>C<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.C2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    CO2.innerHTML = "<span>Carbon Dioxide<sub>&nbsp;</sub><sup>&nbsp;</sup></span>" + "<span>CO<sub>2</sub><sup>&nbsp;</sup></span><span>" + mcc.CO2 + "<sub>&nbsp;</sub><sup>&nbsp;</sup></span>";
                    /*  
                    CO2 Carbon dioxide
                    C2 Diatomic Carbon
                    SN2 Sulfur dinitride 
                    NS2 Disulfur mononitride
                    SH2 Dihydrogen monosulfide
                    NP2 Diphosphorus mononitride
                    C3 Tricarbon 
                    O3 Ozone 
                    O2 Molecular Oxygen II 
                    H3 Molecular Hydrogen III
                    P3 Triphosphorus
                    PP Diphosphorus
                    N3 Trinitrogen
                    S3 Trisulfur
                    NO2 Nitrogen dioxide
                    */
                    tableS.className = "tableS";
                    tableS.innerHTML = "<p>Sulfur Group</p>";

                    tableP.className = "tableP";
                    tableP.innerHTML = "<p>Phosphorus Group</p>";

                    tableH.className = "tableH";
                    tableH.innerHTML = "<p>Hydrogen Group</p>";

                    tableN.className = "tableN";
                    tableN.innerHTML = "<p>Nitrogen Group</p>";

                    tableO.className = "tableO";
                    tableO.innerHTML = "<p>Oxygen Group</p>";

                    tableC.className = "tableC";
                    tableC.innerHTML = "<p>Carbon Group</p>";

                    /////table
                    table.className = "table";
                    table.appendChild(tableC);
                    table.appendChild(tableO);
                    table.appendChild(tableN);
                    table.appendChild(tableH);
                    table.appendChild(tableP);
                    table.appendChild(tableS);

                    /////tableStatus stuffs
                    happiness.innerHTML = "<span>Happiness</span>" + "<span>&nbsp;</span><span>💀</span>";
                    health.innerHTML = "<span>Health</span>" + "<span>&nbsp;</span><span>🖤</span>";
                    current.innerHTML = "<span>Status</span>" + "<span>&nbsp;</span><span>☠</span>";

                    needs.innerHTML = "<span>Next</span>" + "<span>&nbsp;</span><span>Code</span>";
                    wants.innerHTML = "<span>Next</span>" + "<span>&nbsp;</span><span>Code</span>";

                    tableStatusData.className = "tableStatusData";
                    tableStatusData.innerHTML = "<p>" + cellType[uuu.lvl] + "</p>";

                    needsTable.className = "needsTable";
                    needsTable.innerHTML = "<p>Planet Needs</p>";

                    wantsTable.className = "wantsTable";
                    wantsTable.innerHTML = "<p>Life Needs</p>";

                    /////tableStatus
                    tableStatus.className = "tableStatus";
                    tableStatus.appendChild(tableStatusData);
                    tableStatus.appendChild(needsTable);
                    tableStatus.appendChild(wantsTable);
                    
                    ///tableStatus items
                    tableStatusData.appendChild(happiness);
                    tableStatusData.appendChild(health);
                    tableStatusData.appendChild(current);

                    needsTable.appendChild(needs);

                    wantsTable.appendChild(wants);


                    //sulfer elements
                    tableS.appendChild(S3);
                    tableS.appendChild(NS2);

                    //phosphorus elements
                    tableP.appendChild(P3);
                    tableP.appendChild(PP);
                    tableP.appendChild(NP2);

                    //hydrogen elements
                    tableH.appendChild(H3);
                    tableH.appendChild(SH2);

                    //nitrogen elements
                    tableN.appendChild(N3);
                    tableN.appendChild(SN2);

                    //oxygen elements
                    tableO.appendChild(O3);
                    tableO.appendChild(CO2);
                    tableO.appendChild(NO2);
                    tableO.appendChild(O2);

                    //carbon elements
                    tableC.appendChild(C3);
                    tableC.appendChild(C2);

                    closeBtn.className = "closeBtn";
                    closeBtn.onclick = UI.closeMarket(market, table, tableStatus);
                    closeBtn.innerHTML = "❌";

                    market.className = "market";
                    market.innerHTML = "&nbsp;";

                    market.appendChild(closeBtn);
                    market.appendChild(table);
                    market.appendChild(tableStatus);

                    gameFrame.appendChild(market);

                    setTimeout(() => {
                        market.className = "market_full";
                        table.className = "table_full";
                        tableStatus.className = "tableStatus_full";

                        UI.assembleMarketSkye(uuu);
                    }, 100);

                }
            }
        },
        assembleMarketSkye: (uuu) => {
            
            console.log(uuu.mod);
        },
        timerToggle: (turnBtn, clock, timeBtn) => {
            return () => {
                var tBool = localStorage.getItem("tBool");

                if (timeBtn.innerHTML === "▶") {// on
                    timeBtn.innerHTML = "⏹";
                    localStorage.setItem("tBool", 1);
                } else { // off
                    timeBtn.innerHTML = "▶";
                    localStorage.setItem("tBool", 0);
                }
                var t = localStorage.getItem("tBool");
                UI.runTimerCheck();
            }
        },
        runTimerCheck: () => {
            var t = localStorage.getItem("tBool");
            if (+t === 1) {
                UI.cellFlush();
                setTimeout(() => {
                    UI.runTimerCheck();
                }, 200);

            } else {
                localStorage.setItem("tBool", 0);
            }
        },
        setCells: () => {
            var ls = localStorage.getItem("ls");

            for (var k = 0; k < +ls; k++) {
                var mBs = localStorage.getItem("myBlocks_" + (+k + +1));

                if (mBs != null) {
                    if (mBs) {
                        var mmb = JSON.parse(mBs);
                        var cs = UI.bySelAll(".cells");
                        if (cs[k]) {
                            cs[k].style.animationDelay = k + "0ms";
                            //cs[k].style.transition = "all " + k + "200ms";
                            //cs[k].style.left = mmb.left + "px";
                            cs[k].id = mmb.DNA;
                        }
                        //if (cs[k] ) {}
                    }
                }
            }
        },
        checkTheThings: (gameArena) => {
            if (!gameArena) { } else {
                var gA = gameArena.childNodes;
                localStorage.setItem("atoms", "C");
                for (var f = 0; f < gA.length; f++) {
                    var aa = gA[f].id, bb;
                    var atoms = localStorage.getItem("atoms");

                    localStorage.setItem("atoms", atoms + aa);

                }
                var ats = localStorage.getItem("atoms");

                //var x = ats.replace(/[^O]/g, "").length;
                //console.log(x);
            }
        },
        homeCellCreate: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb, changeHomeCellBtn) => {
            return () => {
                var cBool = localStorage.getItem("cBool");
                document.body.style.cursor = "crosshair";
                changeHomeCellBtn.className = "changeHomeCellBtn";
                gameArena.onclick = UI.changeHomeCell(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                //console.log(changeHomeCellBtn);

            }
        },
        tutor6: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +8;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {
                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);

                    }, 600);
                }, 100);
            }
        },
        tutor5: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +6;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {
                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);

                    }, 600);
                }, 100);
            }
        },
        tutor4: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +5;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {


                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        //console.log(chatBox);
                    }, 600);
                }, 100);
            }
        },
        tutor3: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +4;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {

                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        //console.log(chatBox);
                    }, 600);
                }, 100);
            }
        },
        tutor2: (gameFrame, chatBox, chatBtn) => {
            return () => {
                var uD = localStorage.getItem("uData");

                if (uD) {
                    var uuu = JSON.parse(uD);
                }
                console.log(uuu.lvl);
            }
        },
        tutor1: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +2;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {

                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        //console.log(chatBox);
                    }, 600);
                }, 100);
            }
        },

        backMenuClick: (menu, backMenuBtn, gameFrame) => {
            return () => {

                menu.innerHTML = "Menu";
                menu.onclick = UI.userMenu(menu, gameFrame);
                menu.className = "menuTab";

                backMenuBtn.remove();

            }
        },
        userMenu: (menu, gameFrame) => {
            return () => {
                menu.className = "menuTab_full";
                menu.onclick = null;
                menu.innerHTML = "&nbsp;";

                setTimeout(() => {
                    var backMenuBtn = UI.createEle("span"),
                        homeBtn = UI.createEle("button");

                    backMenuBtn.innerHTML = "x";
                    backMenuBtn.className = "backMenuBtn";
                    backMenuBtn.onclick = UI.backMenuClick(menu, backMenuBtn, gameFrame);

                    homeBtn.innerHTML = "Home";
                    homeBtn.onclick = UI.homeMenuFunc;
                    homeBtn.className = "homeBtn";
                    gameFrame.appendChild(backMenuBtn);
                    menu.appendChild(homeBtn);
                }, 600);
            }
        },
        homeMenuFunc: () => {
            dvContain.innerHTML = "";
            UI.myLoad();
        },
        cycle: (turnBtn, clock) => {
            return () => {
                turnBtn.innerHTML = "⌛";

                var uD = localStorage.getItem("uData");

                if (uD) {
                    var udd = JSON.parse(uD);
                }
                if (udd.lvl <= 20) {

                    UI.cellFlush();

                    setTimeout(() => {
                        turnBtn.innerHTML = "🌞";
                    }, 500);
                }
            };
        },
        cellFlush: () => {
            var ls = localStorage.getItem("ls");
            if (+ls < 20) {
                var matter = UI.createEle("div"),
                    rand = Math.floor((Math.random() * window.screen.availHeight)),
                    rColor = Math.floor((Math.random() * 6) + 1), tColor;

                var mB = localStorage.getItem("myBlocks_1");


                if (mB) {
                    var mmm = JSON.parse(mB);
                }
                if (rColor === 6) {//Phosphorous
                    matter.style.backgroundColor = "yellow";
                    matter.id = "P";
                }
                if (rColor === 5) {//Oxygen
                    matter.style.backgroundColor = "red";
                    matter.id = "O";
                }
                if (rColor === 4) {//Carbon
                    matter.style.backgroundColor = "black";
                    matter.id = "C";
                }
                if (rColor === 3) {//Hydrogen
                    matter.style.backgroundColor = "blue";
                    matter.id = "H";
                }
                if (rColor === 2) {//Sodium
                    matter.style.backgroundColor = "white";
                    matter.id = "S";
                }
                if (rColor === 1) {//Nitrogen
                    matter.style.backgroundColor = "limegreen";
                    matter.id = "N";
                }
                if (rand > 100 && rand < 800) {
                    matter.style.top = "" + rand + "px";
                } else {
                    if (rand < 100) {
                        matter.style.top = "" + (rand + 200) + "px";
                        //console.log(matter.style.top);
                    } else {
                        matter.style.top = "" + (rand - 200) + "px";
                        //console.log(matter.style.top);
                    }
                }
                var uT = localStorage.getItem("uTime");
                var uuu = +uT - +1;
                localStorage.setItem("uTime", +uuu - +1);
                if (!clock) {
                    var clock = UI.bySel(".clock");
                    clock.value = uuu + " BCE";
                } else {
                    clock.value = uuu + " BCE";
                }

                matter.className = "matter";

                matter.style.left = "101%";

                matter.innerHTML = "&nbsp;";

                matter.onmouseover = UI.hoverCell(matter);
                matter.onmouseout = UI.outHoverCell(matter);
                matter.onclick = UI.cellSelected(matter);
                if (mmm) {
                    var mUpper = +mmm.top + +20;
                    var mLower = +mmm.top - +20;

                }
                var gameArena = UI.bySel(".gameArena");
                if (!gameArena) {



                } else {
                    gameArena.style.boxShadow = " 0 70px 170px -70px gold inset";
                    gameArena.appendChild(matter);

                    setTimeout(() => {
                        gameArena.style.boxShadow = "0 70px 170px -70px red inset";

                        if (rand <= mUpper && rand >= mLower) {
                            //console.log(ls)
                            var nls = localStorage.getItem("ls");
                            var x = Math.floor((Math.random() * (+15 + +nls))),
                                rSpot = +mmm.left - +x;
                            matter.style.left = rSpot + "px";
                            matter.style.transition = "all 400ms";
                            UI.newCellBlock(matter, mmm, gameArena);
                            //console.log(nls);
                        } else {
                            matter.style.left = "-10%";
                            if (matter.style.left === "-10%") {
                                setTimeout(() => {
                                    matter.remove();
                                }, 1000);

                            }
                        }
                    }, 300);
                }

            } else {
                return false;
            }


        },
        newCellBlock: (matter, mmm, gameArena) => {
            var ls = localStorage.getItem("ls"),
                mB = localStorage.getItem("myBlocks_" + ls);
            var mst = matter.style.top,
                msl = matter.style.left;
            var cell = UI.bySelAll(".cell");

            var x = mst.length, y = msl.length, ms, ml;

            if (+x === +6) {
                ms = mst.slice(0, 4);
            }
            if (+x === +5) {
                ms = mst.slice(0, 3);
            }
            if (+x === +4) {
                ms = mst.slice(0, 2);
            }
            if (+x === +3) {
                ms = mst.slice(0, 1);
            }
            if (+y === +6) {
                ml = msl.slice(0, 4);
            }
            if (+y === +5) {
                ml = msl.slice(0, 3);
            }
            if (+y === +4) {
                ml = msl.slice(0, 2);
            }
            if (+y === +3) {
                ml = msl.slice(0, 1);
            }
            var nLs = +ls + +1;

            myBlocks.bNum = nLs;
            myBlocks.DNA = matter.id;
            myBlocks.top = +ms;
            myBlocks.left = +ml;
            myBlocks.bg = matter.style.backgroundColor;

            localStorage.setItem("ls", +nLs);

            localStorage.setItem("myBlocks_" + nLs, JSON.stringify(myBlocks));
            //UI.checkTheThings(gameArena);
            //var dsdg = localStorage.getItem("myBlocks_" + nLs);
            //console.log(dsdg);

        },
        //settings and misc funcs
        backFunc: (clearBtn, backBtn) => {
            return () => {
                clearBtn.className = "clearBtn_pull";
                backBtn.className = "backBtn_pull";
                setTimeout(() => {
                    clearBtn.remove();
                    backBtn.remove();
                    UI.myLoad();
                }, 1000);
            }
        },
        clearAll: (clearBtn, backBtn) => {
            return () => {
                clearBtn.className = "clearBtn_pull";
                backBtn.className = "backBtn_pull";
                setTimeout(() => {
                    localStorage.clear();
                    location.reload();
                }, 1000);
            }
        }
    };

    window.onload = () => {
        UI.init();

        //console.log(localStorage);
    };

    app.start();

})();
