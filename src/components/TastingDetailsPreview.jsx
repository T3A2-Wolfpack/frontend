const TastingDetailsPreview = ({comment, user}) => {
  return (
    <div className="flex flex-col container p-3 rounded overflow-hidden shadow-lg">
      <div className="w-full flex justify-between">
        <h3 className="">{user?user.email:null}</h3>
        <p>5 Stars</p>
      </div>

      <p className="mt-3 mb-3">{comment.nose.comment}</p>
      <div className="w-full flex justify-between">
        <h4 className="">{comment.createdAt}</h4>
      </div>
    </div>
  );
};

export default TastingDetailsPreview;
