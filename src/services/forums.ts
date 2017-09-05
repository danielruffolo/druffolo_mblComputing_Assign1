import { Forum } from "../models/forum";

export class ForumService {

    private forums: Forum[] = [];



    addForum(title: string,
            author: string,
            description: string,
            dateCreated: string,
            coins: string
            )

            {
                 const forum = new Forum(title, author, description, dateCreated, coins);
                 this.forums.push(forum);
             }

             loadForums(){
                 return this.forums.slice();
             }

             deleteForum(index: number){
                 this.forums.slice(index, 1);
             }

}
