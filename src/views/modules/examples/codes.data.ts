/**
 * 测试数据
 * @author shiloh
 * @date 2025/1/11 10:41
 */

interface Code {
  code: string
  lang: string
}

const jsCode = `
const msg = 'hello highlight.js~';
console.log(msg);
`.trim()

const javaCode = `
package org.shiloh.hello;

public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
`.trim()

const csharpCode = `
namespace Hello;

using System;

internal class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
`

const tsCode = `
interface User {
  id: number;
  name?: string;
}

const msg: string = 'hello highlight.js~';
console.log(msg);
`.trim()

const sqlCode = `
create table t_user (
    id int primary key auto_increment,
    name varchar(20) not null,
    age int not null,
    email varchar(50) not null,
    birthday date not null
)
`.trim()

const cssCode = `
.box {
  padding: 10px;
  border-radius: 5px;
  background-color: #f8f8f8;
}
`

export const CODES: Code[] = [
  {
    code: jsCode,
    lang: 'javascript',
  },
  {
    code: javaCode,
    lang: 'java',
  },
  {
    code: csharpCode,
    lang: 'csharp',
  },
  {
    code: tsCode,
    lang: 'ts',
  },
  {
    code: sqlCode,
    lang: 'sql',
  },
  {
    code: cssCode,
    lang: 'css',
  },
  {
    code: `
[
  {
    "username": "shiloh",
    "age": 26,
    "gender": 1,
    "enabled": true,
    "address": {
      "city": "FoShan"
    },
    "hobbies": [
      "football",
      "basketball"
    ]
  }
]`,
    lang: 'json',
  },
]
