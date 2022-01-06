import React from "react";
import { inject, observer } from "mobx-react";
// import {WizardMobx} from "../store/wizard-mobx"
import { wizardMobxInterface } from "../store/types";

// import { Inject} from "@wizardoc/injector";
// import {extract,Inject} from "@wizardoc/injector"

interface WizardMobxProps {
  wizardMobx?: wizardMobxInterface;
}

@inject("wizardMobx")
@observer
export class Wizard extends React.Component<WizardMobxProps, {}> {
  //  @Inject

  //  wizardMobx!: WizardMobx
  constructor(props: any) {
    super(props);
    console.info(this.props.wizardMobx);
    this.reverse = this.reverse.bind(this);
  }

  // wizardMobx = extract(WizardMobx)
  // pick wizardINjector

  handleBtnClick = () => {
    this.props.wizardMobx!.setNum();
  };

  reverse<T>(item: T[]): T[] {
    const toreturn = [];
    for (let i = item.length - 1; i >= 0; i--) {
      toreturn.push(item[i]);
    }
    return toreturn;
  }

  fuckName<T>(item: T): T {
    return item;
  }
  componentDidMount() {
    this.fuckName<string>("3");
    console.log(this.fuckName("3"));
    const reversed = this.reverse(["1", "2", "3"]);
    reversed[0] = "7";

    //    const num: number = 123
    //    function identify(num:number):number{
    //      return num
    //    }
    //  console.log(  identify (num))
    // let num: number;
    // let str: string;
    // let bool:boolean;

    // console.log(peek())
    // console.log(this.props.wizardMobx)
    // console.log(666,extract(WizardMobx))

    // function formatcommandline(command:string[]|string){
    //   let line = ""
    //   if(typeof command ==="string"){
    //     line = command.trim();
    //   }else{
    //     line = command.join('').trim()
    //   }
    //   return line

    // }
    // console.log(formatcommandline(["h","l"]))

    // let nameNumber:[number,string] = [33,"hello"]
    // const [a,b] = nameNumber
    // console.log(a,b)

    // console.log(nameNumber)

    // type strOrNum = string | number;
    // let sample :strOrNum

    // let sample: string | number;

    // sample = "hello"
    // sample = 3
    // console.log(sample)

    // type Text = string | {text:string}

    //  fucniton extendssss<T extends object, U extends object>(first: T, second: U): T & U {
    //   const result = <T & U>{};
    //   for (let id in first) {
    //     (<T>result)[id] = first[id];
    //   }
    //   for (let id in second) {
    //     if (!result.hasOwnProperty(id)) {
    //       (<U>result)[id] = second[id];
    //     }
    //   }

    //     return result;
    //   }

    // function extend <T extends object,U extends object> (first:T,second:U):T & U{

    //   const result = <T & U>{};
    //   for (let id in first){
    //     (<T>result)[id] = first[id]
    //   }

    //   for(let id in second){
    //     if(!result.hasOwnProperty(id)){
    //       (<U>result[id]) = second[id]
    //     }
    //   }

    // }

    // interface Foo {
    //   bar: number;
    //   bas: string;
    // }
    // const foo = {} as Foo;
    // foo.bar = 5;
    // // foo.bas = "hello";
    // console.log(foo)

    // const simple: (foo: number) => string = (foo) => foo.toString();

        // interface SomeHhing{
        //   name?:string
        //   [propName: string］:any
        // }



    // function foo(someThing: SomeHhing): void {
    //   console.log(666, someThing);
    // }
    // const someItem = { name: "hello", time: "world" };


    // foo(someItem);

    // foo({ name: "hello", time: "world" });





  }

  render() {
    const { num } = this.props.wizardMobx!;
    return (
      <div>
        <div onClick={this.handleBtnClick}>buton</div>
        this is mobx1 !!==={num}
      </div>
    );
  }
}
