import { Forum } from "../models/forum";

export class ForumService {

    private forums: Forum[] = [];



    addForum(title: string,
            author: string,
            description: string,
            dateCreated: string,
            coins: string,
            keyword1: string,
            keyword2: string,
            keyword3: string)

            {
                 const forum = new Forum(title, author, description, dateCreated, coins, keyword1, keyword2, keyword3);
                 this.forums.push(forum);
             }

             loadForums(){
                 return this.forums.slice();
             }

             deleteForum(index: number){
                 this.forums.slice(index, 1);
             }
}
