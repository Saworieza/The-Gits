class TopicsController < ApplicationController
  before_action :set_topic, only: [:show, :edit, :update, :destroy]

  # GET /topics
  # GET /topics.json
  def index
    @topics = Topic.all
  end

  # GET /topics/1
  # GET /topics/1.json
  def show
    
  end

  # GET /topics/new
  def new
    @topic = Topic.new
    @post = Post.new

  end

  # GET /topics/1/edit
  def edit
    @post = Post.new
  end

  # POST /topics
  # POST /topics.json
  
  def create
    @forum = Forum.find(params[:forum])
    @topic = @forum.topics.create(:name=>params[:topic][:name], :last_post_at => Time.now, :last_poster_name => session[:user].username, :username=>session[:user].username)
    @post = @topic.posts.create(params[:post].permit(:content))
    redirect_to topic_path(@topic)
  end  

  # PATCH/PUT /topics/1
  # PATCH/PUT /topics/1.json
  def update
    respond_to do |format|
      if @topic.update(topic_params)
        format.html { redirect_to @topic, notice: 'Topic was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @topic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /topics/1
  # DELETE /topics/1.json
  def destroy
    @topic.destroy
    respond_to do |format|
      format.html { redirect_to topics_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def topic_params
      params.require(:topic).permit(:name, :last_poster_id, :last_post_at, :forum, :content)
    end
  end
