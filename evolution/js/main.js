// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509

(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var isFirstActivation = true;

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
    var UI, uTime;
    
    uTime = "4000330000";

    UI = {
        //return functions
        bySel: (x) => { return document.querySelector(x) },
        bySelAll: (x) => { return document.querySelectorAll(x) },
        createEle: (x) => { return document.createElement(x) },
        //intitializing and localStorage sync
        init: () => {
            var uT = localStorage.getItem("uTime");
            if (!uT || uT === null) {

                localStorage.setItem("uTime", uTime);
            }

            UI.myLoad();
        },
        myLoad: () => {
            var startBtn = UI.createEle("button"),
                settBtn = UI.createEle("button");

            startBtn.innerHTML = "Start";
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
            var turnBtn = UI.createEle("button"),
                clock = UI.createEle("input"),
                menu = UI.createEle("div");

            var uT = localStorage.getItem("uTime");

            turnBtn.innerHTML = "Cycle";
            turnBtn.className = "turnBtn";
            turnBtn.onclick = UI.cycle(turnBtn, clock);

            clock.value = uT + " BCE";
            clock.className = "clock";
            clock.readOnly = true;

            menu.innerHTML = "Menu";
            menu.onclick = UI.userMenu(menu);
            menu.className = "menuTab";

            gameFrame.appendChild(turnBtn);
            gameFrame.appendChild(clock);
            gameFrame.appendChild(menu);

        },
        userMenu: (menu) => {
            return () => {
                
                console.log(menu)
            }
        },
        cycle: (turnBtn, clock) => {
            return () => {
                turnBtn.innerHTML = "⌛";

                var uT = localStorage.getItem("uTime");
                

                var uuu = +uT - +1;

                localStorage.setItem("uTime", uuu);

                clock.value = uuu + " BCE";

                setTimeout(() => {
                    turnBtn.innerHTML = "Cycle";
                }, 500);
            };
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
    };

    app.start();

})();
