import * as Phaser from 'phaser'
import { iStateArgs, State, StateMachine } from './StateMachine'

describe("FSM", ()=>{
    var SM: StateMachine

    class State1 extends State { }
    class State2 extends State { }
    class State3 extends State { }

    var s1 = new State1()
    var s2 = new State2()
    var s3 = new State3()

    describe("StateMachine basic", ()=>{
        test("1 can create State and StateMachine", ()=>{
            SM = new StateMachine('state1', {
                'state1': s1,
                'state2': s2
        }, { scene: new Phaser.Scene({}), stateData: {one:"one"}, ref: {} } )
            expect(SM).toBeInstanceOf(StateMachine)
        })

        test("2 Has Default State of State1 after first SM.step() call", ()=>{
            SM.step()
            expect(SM.state).toBe('state1')
        })

        test("3 contains stateArgs", ()=>{
            SM.step()
            expect(SM.stateArgs.stateData).toEqual({one:'one'})
        })

        test("4 can transition to state2", ()=>{
            SM.transition('state2')
            .step()
            expect(SM.prev_state).toBe('state1')
            expect(SM.state).toBe('state2')
        })

        test("5 extend stateData", ()=>{
            SM.transition('state1', {two:"two"})
            .step()

            expect(SM.stateArgs.stateData).toEqual(
                expect.objectContaining({
                    one: 'one',
                    two: 'two'
                })
            )
        })

        test("6 add new state", ()=>{
            SM.addStates({
                "state3": new State3()
            })

            SM.transition('state3')

            expect(SM.state).toEqual('state3')
        })

        test("7 error when transition to unfound state", ()=>{
            expect(() => {
                SM.transition('state4')
            }).toThrowError('State: state4 not found')
        })
        
    })
    describe("StateMachine transition", ()=>{
        var callCount=0
        class Statex extends State {
            enter() { callCount++ }
        }
        var SM2 = new StateMachine('statex', {
            'statex': new Statex()
        }, { scene: new Phaser.Scene({}), stateData: {one:"one"}, ref: {} } )

        // do the first enter(), callcount should be at 1
        SM2.step()

        test("1 ignore same state with ignoreRepeat: false", ()=>{
            // this should not be allowed, so callcount remain at 1
            SM2.transition('statex')
            expect(callCount).toEqual(1)
        })

        test("2 to the same state with ignoreRepeat: true", ()=>{
            // true flag provided, callcount increases
            SM2.transition('statex',{},true)
            expect(callCount).toEqual(2)
        })
    })
})
