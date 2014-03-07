function MakeCow(){
  score = 0;
  var items = [];
  return {
    increment: function(){
      score++;
    },
    getScore: function(){
      return score.toString();
    },
    addItem: function(newItem){
      if (items.indexOf(newItem) != -1){
        throw new Error("You've already added that item!");
      }
      items.push(newItem);
    }
  };
}
